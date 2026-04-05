/**
 * JerseyPhase — Build / Obfuscation Script
 * Run with:  node build.js
 *
 * Techniques applied:
 *  - Strip all JS comments
 *  - Encode string literals as \uXXXX Unicode sequences
 *  - Collapse whitespace
 *  - Regex literals are detected and skipped safely
 *
 * Usage after editing source files:
 *   1. Edit the files in  src/
 *   2. Run  node build.js
 *   3. The obfuscated versions overwrite lang.js / cart.js / script.js
 */

const fs   = require("fs");
const path = require("path");

const ROOT    = __dirname;
const SRC_DIR = path.join(ROOT, "src");
const TARGETS = ["lang.js", "cart.js", "script.js"];

// ─────────────────────────────────────────────────────────────────────────────
// Tokenise the JS source into a list of segments with a type tag.
// Types: "string", "template", "regex", "comment_line", "comment_block", "code"
// This avoids accidentally treating regex/template content as strings.
// ─────────────────────────────────────────────────────────────────────────────

// Characters after which a / is a regex start, not division
const REGEX_PRECEDER = new Set([
  "=","(","[","!","&","|","?",":",",","{",";","+","-","*","/",
  "~","^","%","<",">","return","typeof","instanceof","in","void",
  "delete","new","throw","case","else",
]);

function tokenise(src) {
  const tokens = []; // { type, raw }
  let i = 0;
  const len = src.length;
  let lastMeaningful = ""; // last non-whitespace, non-comment token

  while (i < len) {
    // ── Block comment ───────────────────────────────────────────────
    if (src[i] === "/" && src[i+1] === "*") {
      let j = i + 2;
      while (j < len && !(src[j] === "*" && src[j+1] === "/")) j++;
      tokens.push({ type: "comment_block", raw: src.slice(i, j + 2) });
      i = j + 2;
      continue;
    }

    // ── Line comment ────────────────────────────────────────────────
    if (src[i] === "/" && src[i+1] === "/") {
      // Don't treat http:// as comment
      const prev = src.slice(Math.max(0, i-6), i);
      if (/https?:$/.test(prev)) { tokens.push({ type: "code", raw: "/" }); i++; continue; }
      let j = i + 2;
      while (j < len && src[j] !== "\n") j++;
      tokens.push({ type: "comment_line", raw: src.slice(i, j) });
      i = j;
      continue;
    }

    // ── Template literal ────────────────────────────────────────────
    if (src[i] === "`") {
      let j = i + 1;
      let depth = 0;
      let raw = "`";
      while (j < len) {
        const c = src[j];
        if (c === "\\" && depth === 0) { raw += c + src[j+1]; j += 2; continue; }
        if (c === "$" && src[j+1] === "{") { depth++; raw += "${"; j += 2; continue; }
        if (c === "}" && depth > 0)  { depth--; raw += c; j++; continue; }
        raw += c; j++;
        if (c === "`" && depth === 0) break;
      }
      tokens.push({ type: "template", raw });
      lastMeaningful = "`";
      i = j;
      continue;
    }

    // ── Single / double quoted string ───────────────────────────────
    if (src[i] === '"' || src[i] === "'") {
      const q = src[i];
      let j = i + 1;
      let raw = q;
      while (j < len) {
        const c = src[j];
        if (c === "\\" ) { raw += c + src[j+1]; j += 2; continue; }
        raw += c; j++;
        if (c === q) break;
      }
      tokens.push({ type: "string", raw, q });
      lastMeaningful = q;
      i = j;
      continue;
    }

    // ── Regex literal ───────────────────────────────────────────────
    if (src[i] === "/") {
      // Determine if this / starts a regex
      const lm = lastMeaningful.trim();
      const isRegex = REGEX_PRECEDER.has(lm) || lm === "";
      if (isRegex && src[i+1] !== "/" && src[i+1] !== "*") {
        // Consume regex literal
        let j = i + 1;
        let raw = "/";
        let inClass = false;
        while (j < len) {
          const c = src[j];
          if (c === "\\" ) { raw += c + src[j+1]; j += 2; continue; }
          if (c === "[")   { inClass = true;  raw += c; j++; continue; }
          if (c === "]")   { inClass = false; raw += c; j++; continue; }
          raw += c; j++;
          if (c === "/" && !inClass) break;
          if (c === "\n") break; // unterminated regex (treat as division)
        }
        // Consume flags
        while (j < len && /[gimsuy]/.test(src[j])) { raw += src[j++]; }
        tokens.push({ type: "regex", raw });
        lastMeaningful = raw;
        i = j;
        continue;
      }
    }

    // ── Whitespace ──────────────────────────────────────────────────
    if (/\s/.test(src[i])) {
      let j = i + 1;
      while (j < len && /\s/.test(src[j])) j++;
      tokens.push({ type: "whitespace", raw: src.slice(i, j) });
      i = j;
      continue;
    }

    // ── Generic code char ───────────────────────────────────────────
    // Accumulate an identifier or operator run
    if (/[a-zA-Z_$]/.test(src[i])) {
      let j = i + 1;
      while (j < len && /[\w$]/.test(src[j])) j++;
      const word = src.slice(i, j);
      tokens.push({ type: "code", raw: word });
      lastMeaningful = word;
      i = j;
      continue;
    }

    tokens.push({ type: "code", raw: src[i] });
    if (!/\s/.test(src[i])) lastMeaningful = src[i];
    i++;
  }

  return tokens;
}

// ─────────────────────────────────────────────────────────────────────────────
// Encode a plain string value (inner content, no surrounding quotes) to \uXXXX
// ─────────────────────────────────────────────────────────────────────────────
function uEncode(inner) {
  return inner.split("").map(c =>
    `\\u${c.charCodeAt(0).toString(16).padStart(4,"0")}`
  ).join("");
}

// ─────────────────────────────────────────────────────────────────────────────
// Build obfuscated output from token list
// ─────────────────────────────────────────────────────────────────────────────
function obfuscate(src) {
  const tokens = tokenise(src);
  let out = "";

  for (const tok of tokens) {
    switch (tok.type) {
      case "comment_block":
      case "comment_line":
        out += " "; // strip comments
        break;

      case "string": {
        // Encode inner content between the quotes
        const inner = tok.raw.slice(1, -1); // strip surrounding quotes
        // Unescape existing escape sequences first, then re-encode
        out += tok.q + uEncode(inner) + tok.q;
        break;
      }

      case "template":
        // Keep template literals as-is (too complex to encode safely)
        out += tok.raw;
        break;

      case "regex":
        // Keep regex literals as-is
        out += tok.raw;
        break;

      case "whitespace":
        // Collapse to a single space or newline
        out += tok.raw.includes("\n") ? "\n" : " ";
        break;

      default:
        out += tok.raw;
    }
  }

  // Minify: collapse spaces around operators/punctuation
  return out
    .replace(/[ \t]+/g, " ")
    .replace(/ *([\n;,{}()[\]=+\-*/<>!&|?:]) */g, "$1")
    .replace(/\n+/g, "\n")
    .replace(/^\n+/, "")
    .trim();
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────
if (!fs.existsSync(SRC_DIR)) fs.mkdirSync(SRC_DIR);

let anyError = false;

for (const file of TARGETS) {
  const srcPath  = path.join(ROOT, file);
  const backPath = path.join(SRC_DIR, file);

  if (!fs.existsSync(srcPath)) {
    console.warn(`⚠️  Skipping ${file} — not found`);
    continue;
  }

  try {
    const original = fs.readFileSync(srcPath, "utf8");
    fs.writeFileSync(backPath, original, "utf8"); // backup

    const code = obfuscate(original);
    fs.writeFileSync(srcPath, code, "utf8");

    const origSize = Buffer.byteLength(original, "utf8");
    const newSize  = Buffer.byteLength(code,     "utf8");
    console.log(`✅  ${file}  (${origSize} B → ${newSize} B)`);
  } catch (err) {
    console.error(`❌  ${file} failed:`, err.message);
    anyError = true;
  }
}

console.log(anyError
  ? "\n⚠️  Some files failed. Originals are in  src/"
  : "\n✅  Done. Originals saved to  src/  — edit there, then run  node build.js  again."
);
