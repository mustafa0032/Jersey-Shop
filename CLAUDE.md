# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

JerseyPhase is a Swiss football jersey shop (CHF currency, German/English UI). It is a static-frontend + single-process Node.js server that handles Stripe payments, order persistence, reviews moderation, and admin/supplier dashboards. There is no framework — vanilla HTML/CSS/JS on the client and a hand-rolled `http` server on the backend.

## Commands

```bash
node serve.js     # start the server on PORT (default 8080)
node build.js     # obfuscate src/*.js → root *.js (run after editing src/)
```

The `npm start` script in `package.json` references `server.js`, which does **not** exist — the real entry point is `serve.js`. Use `node serve.js` directly.

There is no test suite, linter, or build pipeline beyond `build.js`.

## Critical workflow: src/ vs root JS

The three frontend JS files (`script.js`, `cart.js`, `lang.js`) at the repo root are **obfuscated build output** — strings are `\uXXXX`-encoded, comments stripped, whitespace collapsed. **Never edit them directly.**

- Edit the human-readable sources in [src/](src/).
- Run `node build.js` to overwrite the root copies with the obfuscated version.
- HTML pages load the root copies with a `?v=<timestamp>` query string. On every server restart, [serve.js:823-830](serve.js#L823-L830) rewrites the `?v=…` in `index.html`, `checkout.html`, and `admin.html` so browsers never serve stale obfuscated JS.

[build.js](build.js) intentionally skips template literals and regex literals during encoding — be careful when adding new JS that mixes those with sensitive strings you want hidden.

## Architecture

### Server ([serve.js](serve.js))

A single ~840-line file containing all backend logic. Even though `express` is in `package.json`, the server uses Node's built-in `http` module and dispatches by `req.method` + `url` string match.

Key responsibilities:
- **Static files** — anything not matching an `/api/*` route is served from disk with a path-traversal guard ([serve.js:807](serve.js#L807)) and a hardcoded blocklist of sensitive files ([serve.js:798](serve.js#L798)) so `orders.json`, `.env`, etc. cannot be fetched directly.
- **Stripe payments** — `/api/create-payment-intent` recomputes the cart total server-side from `VALID_ITEM_PRICES` ([serve.js:33-40](serve.js#L33-L40)); the client-supplied amount is never trusted. `/api/order/submit` then re-verifies the PaymentIntent via `stripe.paymentIntents.retrieve` before persisting the order.
- **Auth** — In-memory `sessions` Map keyed by random 32-byte tokens, 8h expiry. `requireAuth(res, req, "admin"|"any")` gates protected routes. Admin users come from `.env` (`ADMIN_USER_1..10` / `ADMIN_PASS_1..10` / `ADMIN_ROLE_1..10`). Two roles exist: `admin` (full access) and `supplier` (read-only orders + costs, no customer email/phone — see filtering at [serve.js:698-711](serve.js#L698-L711)).
- **Rate limiting** — `checkRateLimit(ip, key, max, windowMs)` shares a per-key in-memory map with periodic cleanup. Every public endpoint uses it.
- **Email** — Nodemailer + Gmail app password. Owner gets order/review/contact notifications; customer gets confirmation and shipping emails.

### Pricing rules (single source of truth: serve.js)

| Item | CHF |
|---|---|
| Fan Edition base | 35 |
| Retro base | 37 |
| + Shorts addon | +13 |
| + Backprint addon | +4 |
| Shipping | 3.90 per item |
| Discount code `SECRET10` | 10% |

`cart.js` has its own `SHIPPING_PER_ITEM` constant for display, but the server always recomputes the real total. If you change a price, update both [serve.js:27-31](serve.js#L27-L31) and [src/cart.js](src/cart.js) — the server will reject orders whose item prices don't appear in `VALID_ITEM_PRICES`.

### Data persistence

Flat JSON files in the repo root, read/written synchronously by `readJSON` / `writeJSON`:

- `orders.json` — every checkout order (admin can also add manual entries)
- `reviews-pending.json` / `reviews-approved.json` — two-stage moderation queue
- `finance-entries.json` — manual deposits for the supplier-CNY balance widget
- `product-images.json` — admin-only id→image lookup used by the manual-order UI

These files are git-ignored (except `product-images.json`) and are listed in `BLOCKED_FILES` so they cannot be served as static assets. `data-backup/` contains stale `.bak` snapshots — not loaded by the app.

### Frontend

Three pages, all loading the same three obfuscated bundles:

- [index.html](index.html) — catalog, search, reviews, contact form
- [checkout.html](checkout.html) — Stripe Elements payment + order submit
- [admin.html](admin.html) — single-file dashboard (~2000 lines of inline HTML/CSS/JS), tabs for orders/reviews/finance/manual-entry. All state comes from `/api/*` calls with the Bearer token saved in `localStorage`.

Catalog data is hardcoded in [src/script.js](src/script.js) as three large arrays (`products`, `nationalTeamsProducts`, `retrosProducts`). Adding a jersey = editing these arrays + dropping the image into the matching `Jerseys/...` subfolder + rerunning `build.js`.

Translations live in [src/lang.js](src/lang.js) as a flat `JP_TRANSLATIONS` object keyed by `{en, de}`. Elements opt in via `data-i18n="key"` attributes.

### Maintenance mode

Toggle the `MAINTENANCE` flag at [serve.js:202](serve.js#L202) and restart — all non-API requests return [maintenance.html](maintenance.html) with HTTP 503.

## Things to know before changing code

- **Never weaken server-side price validation.** The whole point of the `VALID_ITEM_PRICES` allowlist + `stripe.paymentIntents.retrieve` round-trip is that the client cannot lie about prices. New SKUs require entries in both places.
- **Discount codes are server-only.** Codes live in `DISCOUNT_CODES` ([serve.js:43](serve.js#L43)) — the frontend asks `/api/discount/validate` and never sees the table.
- **CSP and CORS are tight.** `Access-Control-Allow-Origin` is hardcoded to `https://jerseyphase.ch` ([serve.js:156](serve.js#L156)); CSP at [serve.js:167-176](serve.js#L167-L176) only allows Stripe + Google Fonts + cdnjs. Adding a third-party script means widening both.
- **Session store is in-memory.** Restarting the server logs all admins out. There is no clustering — running multiple instances would split sessions.
- **`.env` is the deployment config.** Stripe live keys, Gmail credentials, and admin passwords are all there. The repo's committed `.env` contains real secrets — treat with care and never commit changes to it.
