const CART_KEY = "jerseyhub_cart";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    // Migration: give a uid to any old item that doesn't have one yet
    let changed = false;
    data.forEach((item) => {
      if (!item.uid) {
        item.uid = Date.now().toString(36) + Math.random().toString(36).slice(2);
        changed = true;
      }
    });
    if (changed) localStorage.setItem(CART_KEY, JSON.stringify(data));
    return data;
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + (item.quantity || 0), 0);
}

function getCartTotal() {
  return getCart().reduce((total, item) => total + item.price * item.quantity, 0);
}

// Two items are the "same" only if they share the same product ID,
// the same name (includes addons like Shorts), the same price,
// and the same backprint text — otherwise they become separate entries.
function isSameEntry(a, b) {
  return a.id === b.id &&
         a.name === b.name &&
         a.price === b.price &&
         (a.backprint || "") === (b.backprint || "");
}

function showCartToast(name) {
  let toast = document.getElementById("cart-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cart-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="cart-toast-icon">✅</span><span class="cart-toast-text"><strong>${name}</strong> wurde zum Warenkorb hinzugefügt!</span>`;
  toast.classList.remove("cart-toast--hide");
  toast.classList.add("cart-toast--show");
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.classList.remove("cart-toast--show");
    toast.classList.add("cart-toast--hide");
  }, 3000);
}

function addToCart(newItem) {
  const cart = getCart();
  const existing = cart.find((item) => isSameEntry(item, newItem));

  if (existing) {
    existing.quantity += newItem.quantity;
  } else {
    // Assign a unique uid so we can target this exact entry later
    cart.push({ ...newItem, uid: Date.now().toString(36) + Math.random().toString(36).slice(2) });
  }

  saveCart(cart);
  renderCart();
  showCartToast(newItem.name);
}

function updateQuantity(uid, quantity) {
  const cart = getCart();
  const item = cart.find((entry) => entry.uid === uid);
  if (!item) return;

  item.quantity = Math.max(0, quantity);
  if (item.quantity === 0) {
    removeFromCart(uid);
    return;
  }

  saveCart(cart);
  renderCart();
}

function removeFromCart(uid) {
  const cart = getCart().filter((item) => item.uid !== uid);
  saveCart(cart);
  renderCart();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  renderCart();
}

function updateCartCount() {
  const count = getCartCount();
  const badge = document.getElementById("cart-count");
  if (badge) badge.textContent = count;
  const mobileBadge = document.getElementById("cart-count-mobile");
  if (mobileBadge) mobileBadge.textContent = count;
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const message = document.getElementById("cart-empty");
  const totalEl = document.getElementById("cart-total");
  const cart = getCart();

  if (!container || !totalEl || !message) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    message.style.display = "block";
    totalEl.textContent = "0.00";
    updateCartCount();
    return;
  }

  message.style.display = "none";

  cart.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";

    const sizeHtml      = item.size
      ? `<span class="cart-size-badge">Size: ${item.size}</span>`
      : "";
    const backprintHtml = item.backprint
      ? `<div class="cart-addons-info">✏️ Backprint: ${item.backprint}</div>`
      : "";

    itemEl.innerHTML = `
      <div class="cart-item-image"><img src="${item.image || 'https://via.placeholder.com/60x60?text=Jersey'}" alt="${item.name}" width="60" height="60" /></div>
      <div class="cart-item-details">
        <h3>${item.name} ${sizeHtml}</h3>
        ${backprintHtml}
        <div class="cart-item-meta">
          <span class="cart-price">CHF ${item.price.toFixed(2)}</span>
          <span class="cart-subtotal">Subtotal CHF ${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        <div class="cart-item-actions">
          <button class="qty-btn" data-action="decrease" data-uid="${item.uid}">-</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" data-action="increase" data-uid="${item.uid}">+</button>
          <button class="remove-btn" data-uid="${item.uid}">Remove</button>
        </div>
      </div>
    `;

    container.appendChild(itemEl);
  });

  totalEl.textContent = getCartTotal().toFixed(2);

  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const uid = btn.dataset.uid;
      const action = btn.dataset.action;
      const item = getCart().find((i) => i.uid === uid);
      if (!item) return;
      const nextQty = action === "increase" ? item.quantity + 1 : item.quantity - 1;
      updateQuantity(uid, nextQty);
      updateCartCount();
    });
  });

  container.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.dataset.uid);
      updateCartCount();
    });
  });

  updateCartCount();
}

// Basic init on script load if checkout page is active
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCart);
} else {
  renderCart();
}
