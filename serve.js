// JerseyPhase — Local server with Review API
require("dotenv").config();
const http   = require("http");
const fs     = require("fs");
const path   = require("path");
const https  = require("https");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const PORT    = 8080;
const ROOT    = __dirname;
const VERSION = Date.now(); // cache-busting version, changes on every server restart

// ── Server-side price rules (single source of truth) ──────────────
// Base jersey: 35 CHF | +Shorts: +13 | +Backprint: +4
const BASE_JERSEY_PRICE = 35;
const ADDON_SHORTS      = 13;
const ADDON_BACKPRINT   = 4;
// All valid per-item prices: 35, 39, 48, 52
const VALID_ITEM_PRICES = new Set([
  BASE_JERSEY_PRICE,
  BASE_JERSEY_PRICE + ADDON_BACKPRINT,
  BASE_JERSEY_PRICE + ADDON_SHORTS,
  BASE_JERSEY_PRICE + ADDON_SHORTS + ADDON_BACKPRINT,
]);

// ── Discount codes (server-only, never sent to browser) ───────────
const DISCOUNT_CODES = { "SECRET10": 10 };

// ── Rate limiter for discount validation ─────────────────────────
// Max 5 attempts per IP per minute
const discountRateMap = new Map();
function checkRateLimit(ip) {
  const now  = Date.now();
  const entry = discountRateMap.get(ip) || { count: 0, resetAt: now + 60_000 };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + 60_000; }
  entry.count++;
  discountRateMap.set(ip, entry);
  return entry.count <= 5;
}
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
    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip)) {
      return json(res, 429, { ok: false, error: "Too many attempts. Please wait a minute." });
    }
    const body = await parseBody(req);
    const code = (body.code || "").trim().toUpperCase();
    if (DISCOUNT_CODES[code] !== undefined) {
      return json(res, 200, { ok: true, percent: DISCOUNT_CODES[code] });
    }
    return json(res, 200, { ok: false });
  }

  // ── STRIPE PAYMENT API ──────────────────────────────────────────

  // GET /api/stripe-public-key  — frontend fetches the publishable key
  if (req.method === "GET" && url === "/api/stripe-public-key") {
    return json(res, 200, { publicKey: process.env.STRIPE_PUBLIC_KEY || "" });
  }

  // POST /api/create-payment-intent  — creates a Stripe PaymentIntent
  if (req.method === "POST" && url === "/api/create-payment-intent") {
    const body  = await parseBody(req);
    const items = Array.isArray(body.items) ? body.items : [];

    if (items.length === 0) {
      return json(res, 400, { error: "Cart is empty." });
    }

    // ── Server-side price calculation (never trust client amount) ──
    for (const item of items) {
      const itemPrice = parseFloat(item.price);
      if (!VALID_ITEM_PRICES.has(itemPrice)) {
        return json(res, 400, { error: `Invalid item price: CHF ${itemPrice}` });
      }
      if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 20) {
        return json(res, 400, { error: "Invalid item quantity." });
      }
    }

    let subtotalCHF = items.reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);

    // Apply discount code server-side if provided
    const discountCode    = (body.discount_code || "").trim().toUpperCase();
    const discountPercent = DISCOUNT_CODES[discountCode] || 0;
    const totalCHF        = +(subtotalCHF * (1 - discountPercent / 100)).toFixed(2);
    const amountRappen    = Math.round(totalCHF * 100);

    if (amountRappen < 50) {
      return json(res, 400, { error: "Order amount is too small (minimum CHF 0.50)." });
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount:   amountRappen,
        currency: "chf",
        metadata: {
          order_id:       body.order_id       || "",
          customer_email: body.customer_email || "",
          customer_name:  body.customer_name  || "",
        },
      });
      return json(res, 200, { clientSecret: paymentIntent.client_secret, verifiedTotal: totalCHF });
    } catch (err) {
      console.error("Stripe error:", err.message);
      return json(res, 500, { error: err.message });
    }
  }

  // ── ORDERS API ───────────────────────────────────────────────────

  // POST /api/order/submit  — checkout saves a new order
  if (req.method === "POST" && url === "/api/order/submit") {
    const body = await parseBody(req);
    if (!body.customer || !body.items) {
      return json(res, 400, { error: "Missing fields" });
    }
    try {
      const orders = readJSON(ORDERS);
      const order = {
        id:                Date.now(),
        order_id:          body.order_id || "",
        date:              new Date().toLocaleString("de-CH"),
        status:            body.status || "new",
        customer:          body.customer,
        items:             body.items,
        total:             body.total || 0,
        notes:             body.notes || "",
        newsletter:        body.newsletter || false,
        stripe_payment_id: body.stripe_payment_id || "",
      };
      orders.unshift(order);
      writeJSON(ORDERS, orders);
      console.log(`[Order saved] ${order.order_id} — CHF ${order.total}`);
      return json(res, 200, { ok: true });
    } catch (err) {
      console.error("[Order save FAILED]", err.message);
      return json(res, 500, { error: "Order could not be saved. Please contact support with your payment ID." });
    }
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
