// JerseyPhase — Local server with Review API
require("dotenv").config();
const http       = require("http");
const fs         = require("fs");
const path       = require("path");
const https      = require("https");
const Stripe     = require("stripe");
const nodemailer = require("nodemailer");
const stripe     = Stripe(process.env.STRIPE_SECRET_KEY);

// ── Nodemailer transporter (uses Gmail credentials from .env) ──────
const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const PORT    = parseInt(process.env.PORT) || 8080;
const ROOT    = __dirname;
const VERSION = Date.now(); // cache-busting version, changes on every server restart

// ── Server-side price rules (single source of truth) ──────────────
// Fan Edition:  35 CHF | +Shorts: +13 | +Backprint: +4
// Retros:       37 CHF | +Backprint: +4
const BASE_JERSEY_PRICE = 35;
const BASE_RETRO_PRICE  = 37;
const ADDON_SHORTS      = 13;
const ADDON_BACKPRINT   = 4;
const SHIPPING_PER_ITEM = 3.90; // CHF per item — always calculated server-side
// All valid per-item prices: 35, 39, 41, 48, 52
const VALID_ITEM_PRICES = new Set([
  BASE_JERSEY_PRICE,                                    // 35 — Fan Edition
  BASE_JERSEY_PRICE + ADDON_BACKPRINT,                  // 39 — Fan Edition + Backprint
  BASE_JERSEY_PRICE + ADDON_SHORTS,                     // 48 — Fan Edition + Shorts
  BASE_JERSEY_PRICE + ADDON_SHORTS + ADDON_BACKPRINT,   // 52 — Fan Edition + Shorts + Backprint
  BASE_RETRO_PRICE,                                     // 37 — Retro
  BASE_RETRO_PRICE  + ADDON_BACKPRINT,                  // 41 — Retro + Backprint
]);

// ── Discount codes (server-only, never sent to browser) ───────────
const DISCOUNT_CODES = { "SECRET10": 10 };

// ── Admin credentials — loaded from .env, never hardcoded ─────────
function loadAdminUsers() {
  const users = {};
  for (let i = 1; i <= 10; i++) {
    const u = process.env[`ADMIN_USER_${i}`];
    const p = process.env[`ADMIN_PASS_${i}`];
    const r = process.env[`ADMIN_ROLE_${i}`];
    if (u && p && r) users[u] = { password: p, role: r };
  }
  return users;
}

// ── Session store (in-memory, tokens expire after 8 hours) ────────
const crypto = require("crypto");
const sessions = new Map(); // token → { username, role, expires }

function createSession(username, role) {
  const token   = crypto.randomBytes(32).toString("hex");
  const expires = Date.now() + 8 * 60 * 60 * 1000; // 8h
  sessions.set(token, { username, role, expires });
  return token;
}

function getSession(req) {
  const auth  = req.headers["authorization"] || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return null;
  const session = sessions.get(token);
  if (!session) return null;
  if (Date.now() > session.expires) { sessions.delete(token); return null; }
  return session;
}

// ── Photo URL validation — allow https:// images and compressed data: images ──
function sanitizePhotoUrl(url) {
  if (!url) return null;
  // Accept compressed base64 images (JPEG/PNG/WebP) — client always compresses before sending
  if (url.startsWith("data:image/jpeg;base64,") ||
      url.startsWith("data:image/png;base64,")  ||
      url.startsWith("data:image/webp;base64,")) {
    // Sanity-check size: reject if > 800 KB (base64 ≈ 4/3 × raw bytes)
    if (url.length > 1100000) return null; // ~800 KB base64
    return url;
  }
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;
    return parsed.href;
  } catch {
    return null; // invalid URL
  }
}

function requireAuth(res, req, requiredRole) {
  const session = getSession(req);
  if (!session) {
    json(res, 401, { error: "Nicht angemeldet." });
    return null;
  }
  // "any" = both admin and supplier allowed; "admin" = admin only
  if (requiredRole === "admin" && session.role !== "admin") {
    json(res, 403, { error: "Kein Zugriff — nur Admin." });
    return null;
  }
  return session;
}

// ── Rate limiter (with automatic memory cleanup) ──────────────────
const rateMaps = {};
function checkRateLimit(ip, key = "default", max = 5, windowMs = 60_000) {
  if (!rateMaps[key]) rateMaps[key] = new Map();
  const map   = rateMaps[key];
  const now   = Date.now();
  const entry = map.get(ip) || { count: 0, resetAt: now + windowMs };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + windowMs; }
  entry.count++;
  map.set(ip, entry);
  // Cleanup stale entries every 500 requests to prevent memory leak
  if (map.size > 500) {
    for (const [k, v] of map.entries()) { if (now > v.resetAt) map.delete(k); }
  }
  return entry.count <= max;
}

// Backwards compat alias used by discount endpoint below
const discountRateMap = new Map();
const PENDING  = path.join(ROOT, "reviews-pending.json");
const APPROVED = path.join(ROOT, "reviews-approved.json");
const ORDERS   = path.join(ROOT, "orders.json");
const FINANCE  = path.join(ROOT, "finance-entries.json");

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
function parseBody(req, maxBytes = 1e5) { // default 100 KB; pass larger value where needed
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => { body += chunk; if (body.length > maxBytes) reject(new Error("Too large")); });
    req.on("end", () => { try { resolve(JSON.parse(body)); } catch(e) { resolve({}); } });
    req.on("error", reject);
  });
}

// ── Security + CORS headers ────────────────────────────────────────
function setCORS(res) {
  res.setHeader("Access-Control-Allow-Origin", "https://jerseyphase.ch");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function setSecurityHeaders(res) {
  res.setHeader("X-Content-Type-Options",   "nosniff");
  res.setHeader("X-Frame-Options",          "SAMEORIGIN");
  res.setHeader("Referrer-Policy",          "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy",       "camera=(), microphone=(), geolocation=()");
  // Allow Stripe iframes, Google Fonts, WhatsApp links — needed for shop functionality
  res.setHeader("Content-Security-Policy",
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://js.stripe.com https://cdnjs.cloudflare.com; " +
    "frame-src https://js.stripe.com; " +
    "connect-src 'self' https://api.stripe.com https://q.stripe.com; " +
    "img-src 'self' data: blob: https:; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com data:; " +
    "media-src 'none';"
  );
}

function json(res, code, data) {
  setCORS(res);
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

// ── Server ─────────────────────────────────────────────────────────
http.createServer(async (req, res) => {

  setCORS(res);
  setSecurityHeaders(res);
  if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

  let url;
  try {
    url = decodeURIComponent(req.url.split("?")[0]);
  } catch (e) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad Request");
    return;
  }

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

  // POST /api/login  — admin login, returns session token
  if (req.method === "POST" && url === "/api/login") {
    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip, "login", 10, 60_000)) {
      return json(res, 429, { error: "Zu viele Versuche. Bitte 1 Minute warten." });
    }
    const body  = await parseBody(req);
    const users = loadAdminUsers();
    const user  = users[body.username];
    if (!user || user.password !== body.password) {
      return json(res, 401, { error: "Benutzername oder Passwort falsch." });
    }
    const token = createSession(body.username, user.role);
    return json(res, 200, { ok: true, token, role: user.role, username: body.username });
  }

  // POST /api/logout  — invalidates the session token
  if (req.method === "POST" && url === "/api/logout") {
    const auth  = (req.headers["authorization"] || "").replace("Bearer ", "");
    sessions.delete(auth);
    return json(res, 200, { ok: true });
  }

  // GET /api/auth/check  — verify if token is still valid
  if (req.method === "GET" && url === "/api/auth/check") {
    const session = getSession(req);
    if (!session) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, role: session.role, username: session.username });
  }

  // POST /api/review/submit  — customer submits a new review
  if (req.method === "POST" && url === "/api/review/submit") {
    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip, "review-submit", 3, 10 * 60_000)) {
      return json(res, 429, { error: "Too many review submissions. Please wait." });
    }
    const body = await parseBody(req, 4 * 1024 * 1024); // 4 MB — allows photo uploads
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
      photo:   sanitizePhotoUrl(body.photo),
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
    if (!requireAuth(res, req, "any")) return;
    return json(res, 200, readJSON(PENDING));
  }

  // GET /api/reviews/approved  — website fetches approved reviews
  if (req.method === "GET" && url === "/api/reviews/approved") {
    return json(res, 200, readJSON(APPROVED));
  }

  // POST /api/review/approve  — admin approves a review
  if (req.method === "POST" && url === "/api/review/approve") {
    if (!requireAuth(res, req, "admin")) return;
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
    if (!requireAuth(res, req, "admin")) return;
    const body = await parseBody(req);
    const pending = readJSON(PENDING).filter(r => r.id !== body.id);
    writeJSON(PENDING, pending);
    return json(res, 200, { ok: true });
  }

  // POST /api/review/delete-approved  — admin removes an approved review
  if (req.method === "POST" && url === "/api/review/delete-approved") {
    if (!requireAuth(res, req, "admin")) return;
    const body = await parseBody(req);
    const approved = readJSON(APPROVED).filter(r => r.id !== body.id);
    writeJSON(APPROVED, approved);
    return json(res, 200, { ok: true });
  }

  // POST /api/review/add  — admin manually adds a verified review
  if (req.method === "POST" && url === "/api/review/add") {
    if (!requireAuth(res, req, "admin")) return;
    const body = await parseBody(req, 4 * 1024 * 1024); // 4 MB — allows compressed photo uploads
    if (!body.name || !body.text || !body.rating) {
      return json(res, 400, { error: "Missing fields" });
    }
    // Accept compressed data: images from admin (client compresses to ≤500px JPEG before upload)
    // or sanitized https:// URLs. Reject all other formats.
    const rawPhoto = body.photo || null;
    let safePhoto = null;
    if (rawPhoto) {
      if (rawPhoto.startsWith("data:image/jpeg;base64,") || rawPhoto.startsWith("data:image/png;base64,") || rawPhoto.startsWith("data:image/webp;base64,")) {
        safePhoto = rawPhoto; // admin-uploaded, already compressed client-side
      } else {
        safePhoto = sanitizePhotoUrl(rawPhoto); // https:// URL — sanitize normally
      }
    }
    const approved = readJSON(APPROVED);
    approved.unshift({
      id:       Date.now(),
      name:     body.name,
      jersey:   body.jersey  || "",
      rating:   Number(body.rating) || 5,
      text:     body.text,
      photo:    safePhoto,
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

  // GET /api/product-images  — admin fetches product id/name/image lookup
  if (req.method === "GET" && url === "/api/product-images") {
    if (!requireAuth(res, req, "any")) return;
    return json(res, 200, readJSON(path.join(ROOT, "product-images.json")));
  }

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

    let subtotalCHF  = items.reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);
    const totalQty   = items.reduce((sum, i) => sum + i.quantity, 0);

    // Apply discount code server-side if provided
    const discountCode    = (body.discount_code || "").trim().toUpperCase();
    const discountPercent = DISCOUNT_CODES[discountCode] || 0;
    const discountedCHF   = +(subtotalCHF * (1 - discountPercent / 100)).toFixed(2);

    // Shipping = 3.90 CHF × total number of items — always calculated server-side
    const shippingCHF  = +(SHIPPING_PER_ITEM * totalQty).toFixed(2);
    const totalCHF     = +(discountedCHF + shippingCHF).toFixed(2);
    const amountRappen = Math.round(totalCHF * 100);

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
      return json(res, 200, {
        clientSecret:   paymentIntent.client_secret,
        verifiedTotal:  totalCHF,
        shippingCHF:    shippingCHF,
        subtotalCHF:    discountedCHF,
      });
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

    // ── Rate limit order submissions ─────────────────────────────
    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip, "order-submit", 5, 60_000)) {
      return json(res, 429, { error: "Too many requests." });
    }

    // ── Determine if this is an authenticated admin request ──────────
    // Web checkout = no auth header; Admin manual entry = Bearer token
    const adminSession = getSession(req);
    const isAdminOrder = !!(adminSession && adminSession.role === "admin");

    // ── Verify Stripe payment server-side (web checkout orders only) ─
    // Manual admin orders have no stripe_payment_id — skip verification
    const stripeId = body.stripe_payment_id || "";
    let verifiedTotal = null;

    if (stripeId) {
      try {
        const pi = await stripe.paymentIntents.retrieve(stripeId);
        if (pi.status !== "succeeded") {
          return json(res, 400, { error: "Payment not completed. Order not saved." });
        }
        verifiedTotal = pi.amount / 100; // Stripe stores in Rappen (CHF cents)
      } catch (err) {
        console.error("[Stripe verify error]", err.message);
        return json(res, 400, { error: "Could not verify payment. Please contact support." });
      }
    } else if (!isAdminOrder) {
      // Non-admin order without Stripe ID — reject
      return json(res, 400, { error: "Missing payment information." });
    }

    // ── Validate status if provided by admin ─────────────────────────
    const VALID_STATUSES = ["new", "processing", "shipped", "delivered", "cancelled"];
    const requestedStatus = body.status || "new";
    const orderStatus = isAdminOrder && VALID_STATUSES.includes(requestedStatus)
      ? requestedStatus   // Admin can set any valid status
      : "new";            // Web checkout always starts as "new"

    try {
      const orders = readJSON(ORDERS);
      const order = {
        id:                Date.now(),
        order_id:          body.order_id || ("MAN-" + Date.now().toString(36).toUpperCase().slice(-5)),
        date:              new Date().toLocaleString("de-CH"),
        status:            orderStatus,
        payment_status:    stripeId ? "paid" : (isAdminOrder ? (body.payment_status || "manual") : "unpaid"),
        customer:          body.customer,
        items:             body.items,
        total:             verifiedTotal !== null ? verifiedTotal : (body.total || 0),
        notes:             body.notes || "",
        newsletter:        body.newsletter || false,
        stripe_payment_id: stripeId,
      };
      orders.unshift(order);
      writeJSON(ORDERS, orders);
      console.log(`[Order saved] ${order.order_id} — CHF ${order.total} (${isAdminOrder ? "manual" : "web"})`);

      // Notify owner only for real web checkout orders (not manually entered by admin)
      if (isAdminOrder) return json(res, 200, { ok: true });

      const c = order.customer || {};
      const itemLines = (order.items || []).map(i =>
        `  • ${i.name}${i.size ? ` (${i.size})` : ""}${i.backprint ? ` [Backprint: ${i.backprint}]` : ""} × ${i.quantity} — CHF ${i.subtotal}`
      ).join("\n");
      mailer.sendMail({
        from:    `"JerseyPhase Shop" <${process.env.GMAIL_USER}>`,
        to:      process.env.GMAIL_USER,
        subject: `🛒 Neue Bestellung ${order.order_id} — CHF ${order.total}`,
        text: [
          `🛒 NEUE BESTELLUNG EINGEGANGEN`,
          ``,
          `Bestellnummer: ${order.order_id}`,
          `Datum:         ${order.date}`,
          `Total:         CHF ${order.total}`,
          `Stripe ID:     ${order.stripe_payment_id || "—"}`,
          ``,
          `══════════════════════════════`,
          `KUNDE`,
          `══════════════════════════════`,
          `Name:     ${c.name || "—"}`,
          `E-Mail:   ${c.email || "—"}`,
          `Telefon:  ${c.phone || "—"}`,
          `Adresse:  ${c.address || "—"}, ${c.postalCode || ""} ${c.city || ""}, ${c.country || ""}`,
          ``,
          `══════════════════════════════`,
          `ARTIKEL`,
          `══════════════════════════════`,
          itemLines || "—",
          ``,
          order.notes ? `Anmerkungen: ${order.notes}` : "",
          `Newsletter: ${order.newsletter ? "✅ Ja" : "❌ Nein"}`,
        ].filter(l => l !== undefined && l !== "").join("\n"),
      }).catch(err => console.error("[Owner notify error]", err.message));

      return json(res, 200, { ok: true });
    } catch (err) {
      console.error("[Order save FAILED]", err.message);
      return json(res, 500, { error: "Order could not be saved. Please contact support with your payment ID." });
    }
  }

  // POST /api/send-confirmation  — sends order confirmation email via nodemailer
  if (req.method === "POST" && url === "/api/send-confirmation") {
    const body = await parseBody(req);
    const { name, email, order_id, cart_items, total, notes, payment_info } = body;
    if (!email || !order_id) return json(res, 400, { error: "Missing fields" });

    // Simple rate limit: max 3 emails per IP per 10 minutes
    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip, "email", 3, 10 * 60_000)) {
      return json(res, 429, { error: "Too many requests." });
    }

    try {
      await mailer.sendMail({
        from:    `"JerseyPhase" <${process.env.GMAIL_USER}>`,
        to:      email,
        subject: `✅ Bestellung bestätigt — ${order_id}`,
        text: [
          `Hallo ${name},`,
          ``,
          `Vielen Dank für deine Bestellung bei JerseyPhase! 🎽⚽`,
          ``,
          `═══════════════════════════`,
          `BESTELLÜBERSICHT`,
          `═══════════════════════════`,
          `Bestellnummer: ${order_id}`,
          ``,
          `Artikel:`,
          cart_items || "—",
          ``,
          `${payment_info || ""}`,
          notes && notes !== "—" ? `\nAnmerkungen: ${notes}` : "",
          ``,
          `Bei Fragen erreichst du uns unter jerseyphase@gmail.com`,
          ``,
          `Vielen Dank und viel Spass mit deinem Trikot! 🏆`,
          `Dein JerseyPhase Team`,
        ].join("\n"),
      });
      return json(res, 200, { ok: true });
    } catch (err) {
      console.error("[Email error]", err.message);
      return json(res, 500, { error: "Email could not be sent." });
    }
  }

  // POST /api/order/send-shipping-email  — admin sends shipping notification to customer
  if (req.method === "POST" && url === "/api/order/send-shipping-email") {
    if (!requireAuth(res, req, "admin")) return;
    const body = await parseBody(req);
    const { order_id, to, subject, body: emailBody } = body;

    if (!to || !subject || !emailBody) {
      return json(res, 400, { error: "Missing fields." });
    }
    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
      return json(res, 400, { error: "Invalid recipient email address." });
    }

    // Rate limit: max 20 shipping emails per hour
    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip, "shipping-email", 20, 60 * 60_000)) {
      return json(res, 429, { error: "Too many emails. Please wait." });
    }

    try {
      await mailer.sendMail({
        from:    `"JerseyPhase" <${process.env.GMAIL_USER}>`,
        to,
        subject,
        text:    emailBody,
      });
      console.log(`[Shipping email] Sent to ${to} for order ${order_id}`);
      return json(res, 200, { ok: true });
    } catch (err) {
      console.error("[Shipping email error]", err.message);
      return json(res, 500, { error: "Email konnte nicht gesendet werden: " + err.message });
    }
  }

  // POST /api/contact  — contact form sends message to owner
  if (req.method === "POST" && url === "/api/contact") {
    const body = await parseBody(req);
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return json(res, 400, { error: "Missing fields" });
    }

    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip, "contact", 3, 10 * 60_000)) {
      return json(res, 429, { error: "Too many requests." });
    }

    try {
      await mailer.sendMail({
        from:    `"JerseyPhase Contact" <${process.env.GMAIL_USER}>`,
        to:      process.env.GMAIL_USER,
        replyTo: email,
        subject: `📬 Kontakt: ${subject}`,
        text: [
          `Neue Kontaktnachricht über JerseyPhase:`,
          ``,
          `Name:    ${name}`,
          `E-Mail:  ${email}`,
          `Betreff: ${subject}`,
          ``,
          `Nachricht:`,
          message,
        ].join("\n"),
      });
      return json(res, 200, { ok: true });
    } catch (err) {
      console.error("[Contact email error]", err.message);
      return json(res, 500, { error: "Message could not be sent." });
    }
  }

  // POST /api/notify-review  — notifies owner when a new review is submitted
  if (req.method === "POST" && url === "/api/notify-review") {
    const body = await parseBody(req);
    const { reviewerName, jersey, rating, reviewText, orderEmail, dateStr, hasPhoto, savedToAdmin } = body;

    const ip = req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip, "review-notify", 5, 10 * 60_000)) {
      return json(res, 429, { error: "Too many requests." });
    }

    const starsDisplay = "⭐".repeat(Math.min(5, rating || 0)) + "☆".repeat(5 - Math.min(5, rating || 0));
    try {
      await mailer.sendMail({
        from:    `"JerseyPhase Reviews" <${process.env.GMAIL_USER}>`,
        to:      process.env.GMAIL_USER,
        subject: `⭐ Neue Bewertung – JerseyPhase${savedToAdmin ? "" : " [ADMIN SAVE FEHLGESCHLAGEN]"}`,
        text: [
          `Neue Bewertung eingegangen:`,
          ``,
          `Kunde:      ${orderEmail || "—"}`,
          `Name:       ${reviewerName}`,
          `Trikot:     ${jersey}`,
          `Bewertung:  ${starsDisplay} (${rating}/5)`,
          `Text:       ${reviewText}`,
          `Datum:      ${dateStr}`,
          `Foto:       ${hasPhoto ? "Ja" : "Nein"}`,
          `Im Admin gespeichert: ${savedToAdmin ? "Ja ✅" : "Nein ❌ – bitte manuell eintragen via Admin → ✍️ Review hinzufügen"}`,
        ].join("\n"),
      });
      return json(res, 200, { ok: true });
    } catch (err) {
      console.error("[Review notify error]", err.message);
      return json(res, 500, { error: "Notification could not be sent." });
    }
  }

  // GET /api/orders  — admin/supplier fetches all orders
  if (req.method === "GET" && url === "/api/orders") {
    const session = requireAuth(res, req, "any");
    if (!session) return;
    const orders = readJSON(ORDERS);
    // Supplier sees orders but NOT customer email/phone
    if (session.role !== "admin") {
      const filtered = orders.map(o => ({
        ...o,
        customer: o.customer ? {
          name:       o.customer.name,
          address:    o.customer.address,
          city:       o.customer.city,
          postalCode: o.customer.postalCode,
          country:    o.customer.country,
          // email and phone intentionally omitted
        } : {},
      }));
      return json(res, 200, filtered);
    }
    return json(res, 200, orders);
  }

  // POST /api/order/update-status  — admin/supplier updates order status
  if (req.method === "POST" && url === "/api/order/update-status") {
    if (!requireAuth(res, req, "any")) return;
    const body = await parseBody(req);
    const VALID_STATUSES = ["new", "processing", "shipped", "delivered", "cancelled"];
    if (!VALID_STATUSES.includes(body.status)) {
      return json(res, 400, { error: "Invalid status value." });
    }
    const orders = readJSON(ORDERS);
    const order = orders.find(o => o.id === body.id);
    if (!order) return json(res, 404, { error: "Not found" });
    order.status = body.status;
    writeJSON(ORDERS, orders);
    return json(res, 200, { ok: true });
  }

  // POST /api/order/update-costs  — supplier/admin saves costs for an order
  if (req.method === "POST" && url === "/api/order/update-costs") {
    if (!requireAuth(res, req, "any")) return;
    const body = await parseBody(req);
    const orders = readJSON(ORDERS);
    const order = orders.find(o => o.id === body.id);
    if (!order) return json(res, 404, { error: "Not found" });
    const c = body.costs || {};
    order.costs = {
      jersey:     Math.max(0, parseFloat(c.jersey)     || 0),
      shipping:   Math.max(0, parseFloat(c.shipping)   || 0),
      serviceFee: Math.max(0, parseFloat(c.serviceFee) || 0),
      printing:   Math.max(0, parseFloat(c.printing)   || 0),
      enteredAt:  new Date().toLocaleString("de-CH"),
    };
    writeJSON(ORDERS, orders);
    return json(res, 200, { ok: true });
  }

  // POST /api/order/delete  — admin deletes an order
  if (req.method === "POST" && url === "/api/order/delete") {
    if (!requireAuth(res, req, "admin")) return;
    const body = await parseBody(req);
    const orders = readJSON(ORDERS).filter(o => o.id !== body.id);
    writeJSON(ORDERS, orders);
    return json(res, 200, { ok: true });
  }

  // ── FINANCE API ──────────────────────────────────────────────────

  // GET /api/finance/entries  — admin or supplier can read (for balance display)
  if (req.method === "GET" && url === "/api/finance/entries") {
    if (!requireAuth(res, req, "any")) return;
    return json(res, 200, readJSON(FINANCE));
  }

  // POST /api/finance/add-entry  — admin adds a manual finance entry
  if (req.method === "POST" && url === "/api/finance/add-entry") {
    if (!requireAuth(res, req, "admin")) return;
    const body = await parseBody(req);
    const { description, amount } = body;
    if (!description || !amount || parseFloat(amount) <= 0) {
      return json(res, 400, { error: "Missing or invalid fields." });
    }
    const entries = readJSON(FINANCE);
    entries.unshift({
      id:          Date.now(),
      date:        new Date().toLocaleDateString("de-CH", { day:"2-digit", month:"2-digit", year:"numeric" }),
      description: String(description).slice(0, 200),
      amount:      Math.abs(parseFloat(amount)),
      type:        "deposit",
    });
    writeJSON(FINANCE, entries);
    return json(res, 200, { ok: true });
  }

  // POST /api/finance/delete-entry  — admin deletes a manual finance entry
  if (req.method === "POST" && url === "/api/finance/delete-entry") {
    if (!requireAuth(res, req, "admin")) return;
    const body = await parseBody(req);
    const entries = readJSON(FINANCE).filter(e => e.id !== body.id);
    writeJSON(FINANCE, entries);
    return json(res, 200, { ok: true });
  }

  // ── STATIC FILES ──────────────────────────────────────────────────
  // Block direct access to sensitive data files
  const BLOCKED_FILES = ["orders.json","reviews-pending.json","reviews-approved.json","product-images.json","finance-entries.json",".env","serve.js"];
  const requestedFile = url.split("/").pop().split("?")[0];
  if (BLOCKED_FILES.includes(requestedFile)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }

  let filePath = path.normalize(path.join(ROOT, url === "/" ? "/index.html" : url));

  // ── Path traversal guard: ensure file is within ROOT ─────────────
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain" }); res.end("Not found"); return; }
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
