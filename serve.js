// JerseyPhase — Local server with Review API
require("dotenv").config();
const http   = require("http");
const fs     = require("fs");
const path   = require("path");
const https  = require("https");

const PORT    = 8080;
const ROOT    = __dirname;
const VERSION = Date.now(); // cache-busting version, changes on every server restart
const PENDING  = path.join(ROOT, "reviews-pending.json");
const APPROVED = path.join(ROOT, "reviews-approved.json");
const ORDERS   = path.join(ROOT, "orders.json");

const MIME = {
  ".html": "text/html", ".css": "text/css", ".js": "application/javascript",
  ".json": "application/json", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".webp": "image/webp", ".gif": "image/gif",
  ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf",
};

// ── JSON file helpers ──────────────────────────────────────────────
function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch(e) { return []; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
}

// ── Parse request body ─────────────────────────────────────────────
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => { body += chunk; if (body.length > 5e6) reject(new Error("Too large")); });
    req.on("end", () => { try { resolve(JSON.parse(body)); } catch(e) { resolve({}); } });
    req.on("error", reject);
  });
}

// ── CORS headers ───────────────────────────────────────────────────
function setCORS(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function json(res, code, data) {
  setCORS(res);
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

// ── Server ─────────────────────────────────────────────────────────
http.createServer(async (req, res) => {

  setCORS(res);
  if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

  const url = decodeURIComponent(req.url.split("?")[0]);

  // ── WARTUNGSMODUS ─────────────────────────────────────────────────
  const MAINTENANCE = false; // auf true setzen um Wartungsseite zu aktivieren
  if (MAINTENANCE && !url.startsWith("/api/") && url !== "/maintenance.html") {
    const mFile = path.join(ROOT, "maintenance.html");
    fs.readFile(mFile, (err, data) => {
      res.writeHead(503, { "Content-Type": "text/html" });
      res.end(err ? "<h1>Wartung</h1>" : data);
    });
    return;
  }
  // ─────────────────────────────────────────────────────────────────

  // ── API ROUTES ────────────────────────────────────────────────────

  // POST /api/review/submit  — customer submits a new review
  if (req.method === "POST" && url === "/api/review/submit") {
    const body = await parseBody(req);
    if (!body.name || !body.text || !body.rating) {
      return json(res, 400, { error: "Missing fields" });
    }
    const pending = readJSON(PENDING);
    const review = {
      id:      Date.now(),
      name:    body.name,
      jersey:  body.jersey  || "",
      rating:  Number(body.rating) || 5,
      text:    body.text,
      photo:   body.photo   || null,
      date:    body.date    || new Date().toLocaleDateString("de-CH", { month: "long", year: "numeric" }),
      email:   body.email   || "",
      verified: false,
    };
    pending.unshift(review);
    writeJSON(PENDING, pending);
    return json(res, 200, { ok: true });
  }

  // GET /api/reviews/pending  — admin fetches pending reviews
  if (req.method === "GET" && url === "/api/reviews/pending") {
    return json(res, 200, readJSON(PENDING));
  }

  // GET /api/reviews/approved  — website fetches approved reviews
  if (req.method === "GET" && url === "/api/reviews/approved") {
    return json(res, 200, readJSON(APPROVED));
  }

  // POST /api/review/approve  — admin approves a review
  if (req.method === "POST" && url === "/api/review/approve") {
    const body    = await parseBody(req);
    const pending  = readJSON(PENDING);
    const approved = readJSON(APPROVED);
    const idx = pending.findIndex(r => r.id === body.id);
    if (idx === -1) return json(res, 404, { error: "Not found" });
    const review = { ...pending[idx], verified: true };
    approved.unshift(review);
    pending.splice(idx, 1);
    writeJSON(PENDING,  pending);
    writeJSON(APPROVED, approved);
    return json(res, 200, { ok: true });
  }

  // POST /api/review/delete-pending  — admin rejects a pending review
  if (req.method === "POST" && url === "/api/review/delete-pending") {
    const body = await parseBody(req);
    const pending = readJSON(PENDING).filter(r => r.id !== body.id);
    writeJSON(PENDING, pending);
    return json(res, 200, { ok: true });
  }

  // POST /api/review/delete-approved  — admin removes an approved review
  if (req.method === "POST" && url === "/api/review/delete-approved") {
    const body = await parseBody(req);
    const approved = readJSON(APPROVED).filter(r => r.id !== body.id);
    writeJSON(APPROVED, approved);
    return json(res, 200, { ok: true });
  }

  // POST /api/review/add  — admin manually adds a verified review
  if (req.method === "POST" && url === "/api/review/add") {
    const body = await parseBody(req);
    if (!body.name || !body.text || !body.rating) {
      return json(res, 400, { error: "Missing fields" });
    }
    const approved = readJSON(APPROVED);
    approved.unshift({
      id:       Date.now(),
      name:     body.name,
      jersey:   body.jersey  || "",
      rating:   Number(body.rating) || 5,
      text:     body.text,
      photo:    body.photo   || null,
      date:     body.date    || new Date().toLocaleDateString("de-CH", { month: "long", year: "numeric" }),
      verified: true,
    });
    writeJSON(APPROVED, approved);
    return json(res, 200, { ok: true });
  }

  // ── DISCOUNT CODE VALIDATION ────────────────────────────────────

  // POST /api/discount/validate  — validates a discount code server-side
  if (req.method === "POST" && url === "/api/discount/validate") {
    const body = await parseBody(req);
    // Discount codes are ONLY stored here on the server — never sent to the browser
    const DISCOUNT_CODES = { "SECRET10": 10 };
    const code = (body.code || "").trim().toUpperCase();
    if (DISCOUNT_CODES[code] !== undefined) {
      return json(res, 200, { ok: true, percent: DISCOUNT_CODES[code] });
    }
    return json(res, 200, { ok: false });
  }

  // ── NOWPAYMENTS API ─────────────────────────────────────────────

  // POST /api/create-nowpayment  — creates a NOWPayments invoice and returns the payment URL
  if (req.method === "POST" && url === "/api/create-nowpayment") {
    const body = await parseBody(req);
    const amountCHF = parseFloat(body.amount) || 0;
    if (amountCHF < 0.5) {
      return json(res, 400, { error: "Order amount is too small (minimum CHF 0.50)." });
    }

    const apiKey = process.env.NOWPAYMENTS_API_KEY || "";
    if (!apiKey) {
      return json(res, 500, { error: "NOWPayments API key not configured." });
    }

    const payload = JSON.stringify({
      price_amount:      amountCHF,
      price_currency:    "chf",
      order_id:          body.order_id          || "",
      order_description: body.order_description || "JerseyPhase Order",
      ipn_callback_url:  process.env.NOWPAYMENTS_IPN_URL  || "",
      success_url:       process.env.NOWPAYMENTS_SUCCESS_URL || "http://localhost:8080/checkout.html?payment=success",
      cancel_url:        process.env.NOWPAYMENTS_CANCEL_URL  || "http://localhost:8080/checkout.html?payment=cancelled",
    });

    try {
      const invoiceUrl = await new Promise((resolve, reject) => {
        const options = {
          hostname: "api.nowpayments.io",
          path:     "/v1/invoice",
          method:   "POST",
          headers:  {
            "x-api-key":     apiKey,
            "Content-Type":  "application/json",
            "Content-Length": Buffer.byteLength(payload),
          },
        };
        const apiReq = https.request(options, apiRes => {
          let data = "";
          apiRes.on("data", chunk => data += chunk);
          apiRes.on("end", () => {
            try {
              const parsed = JSON.parse(data);
              if (parsed.invoice_url) resolve(parsed.invoice_url);
              else reject(new Error(parsed.message || "NOWPayments error"));
            } catch(e) { reject(e); }
          });
        });
        apiReq.on("error", reject);
        apiReq.write(payload);
        apiReq.end();
      });
      return json(res, 200, { invoiceUrl });
    } catch (err) {
      console.error("NOWPayments error:", err.message);
      return json(res, 500, { error: err.message });
    }
  }

  // POST /api/nowpayments-ipn  — handles NOWPayments payment confirmation webhook
  if (req.method === "POST" && url === "/api/nowpayments-ipn") {
    const body = await parseBody(req);
    if (body.payment_status === "finished" || body.payment_status === "confirmed") {
      const orders = readJSON(ORDERS);
      const order = orders.find(o => o.order_id === body.order_id);
      if (order) {
        order.status = "paid";
        order.nowpayments_id = body.payment_id || "";
        writeJSON(ORDERS, orders);
      }
    }
    res.writeHead(200);
    res.end("OK");
    return;
  }

  // ── ORDERS API ───────────────────────────────────────────────────

  // POST /api/order/submit  — checkout saves a new order
  if (req.method === "POST" && url === "/api/order/submit") {
    const body = await parseBody(req);
    if (!body.customer || !body.items) {
      return json(res, 400, { error: "Missing fields" });
    }
    const orders = readJSON(ORDERS);
    const order = {
      id:       Date.now(),
      order_id: body.order_id || "",
      date:     new Date().toLocaleString("de-CH"),
      status:   body.status || "new",
      customer: body.customer,
      items:    body.items,
      total:    body.total || 0,
      notes:    body.notes || "",
    };
    orders.unshift(order);
    writeJSON(ORDERS, orders);
    return json(res, 200, { ok: true });
  }

  // GET /api/orders  — admin/supplier fetches all orders
  if (req.method === "GET" && url === "/api/orders") {
    return json(res, 200, readJSON(ORDERS));
  }

  // POST /api/order/update-status  — admin updates order status
  if (req.method === "POST" && url === "/api/order/update-status") {
    const body = await parseBody(req);
    const orders = readJSON(ORDERS);
    const order = orders.find(o => o.id === body.id);
    if (!order) return json(res, 404, { error: "Not found" });
    order.status = body.status;
    writeJSON(ORDERS, orders);
    return json(res, 200, { ok: true });
  }

  // POST /api/order/delete  — admin deletes an order
  if (req.method === "POST" && url === "/api/order/delete") {
    const body = await parseBody(req);
    const orders = readJSON(ORDERS).filter(o => o.id !== body.id);
    writeJSON(ORDERS, orders);
    return json(res, 200, { ok: true });
  }

  // ── STATIC FILES ──────────────────────────────────────────────────
  let filePath = path.join(ROOT, url === "/" ? "/index.html" : url);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found: " + url); return; }
    const ext  = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || "application/octet-stream";
    const isJs = ext === ".js";
    res.writeHead(200, { "Content-Type": mime, "Cache-Control": isJs ? "no-store" : "no-cache" });
    res.end(data);
  });

}).listen(PORT, "127.0.0.1", () => {
  // Stamp a fresh ?v= into HTML files so browsers never serve stale JS
  ["index.html", "checkout.html", "admin.html"].forEach(file => {
    const p = path.join(ROOT, file);
    if (!fs.existsSync(p)) return;
    const html = fs.readFileSync(p, "utf8")
      .replace(/\?v=\d+/g, "?v=" + VERSION);
    fs.writeFileSync(p, html, "utf8");
  });

  console.log("");
  console.log("  ✅  JerseyPhase is running!");
  console.log("  👉  Shop:   http://localhost:" + PORT);
  console.log("  🔐  Admin:  http://localhost:" + PORT + "/admin.html");
  console.log("");
  console.log("  Keep this window open while you use the shop.");
  console.log("  Press Ctrl+C to stop the server.");
  console.log("");
});
