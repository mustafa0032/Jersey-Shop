const CART_KEY="jerseyhub_cart";

let activeDiscountCode=null;
let activeDiscountPercent=0;

async function applyDiscountCode(code){
try{
const res=await fetch("/api/discount/validate",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({code}),
});
const data=await res.json();
if(data.ok){
activeDiscountCode=(code||"").trim().toUpperCase();
activeDiscountPercent=data.percent;
return{ok:true,percent:data.percent};
}
return{ok:false};
}catch(e){
return{ok:false};
}
}

function removeDiscount(){
activeDiscountCode=null;
activeDiscountPercent=0;
}

function getDiscountPercent(){return activeDiscountPercent;}
function getActiveDiscount(){return activeDiscountCode;}
const SHIPPING_PER_ITEM = 2.90; // CHF per item — display only, server enforces the real value

function getShippingDisplay(){
  const cart = getCart();
  const totalQty = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);
  return +(SHIPPING_PER_ITEM * totalQty).toFixed(2);
}

function getDiscountedTotal(){
const raw=getCartTotal();
return+(raw*(1-activeDiscountPercent/100)).toFixed(2);
}

function updateDiscountUI(){
const discountRow   = document.getElementById("cart-discount-row");
const shippingRow   = document.getElementById("cart-shipping-row");
const finalRow      = document.getElementById("cart-final-row");
const discountAmount= document.getElementById("cart-discount-amount");
const finalTotal    = document.getElementById("cart-final-total");
const shippingAmt   = document.getElementById("cart-shipping-amount");
if(!discountRow)return;

const raw          = getCartTotal();
const saving       = +(raw * activeDiscountPercent / 100).toFixed(2);
const discounted   = getDiscountedTotal();
const shippingDisp = getShippingDisplay();
const grandTotal   = +(discounted + shippingDisp).toFixed(2);

// Always show shipping row
if(shippingRow)  shippingRow.style.display = "";
if(shippingAmt)  shippingAmt.textContent   = shippingDisp.toFixed(2);
if(finalRow)     finalRow.style.display    = "";
if(finalTotal)   finalTotal.textContent    = grandTotal.toFixed(2);

if(activeDiscountPercent > 0){
  if(discountAmount) discountAmount.textContent = saving.toFixed(2);
  discountRow.style.display = "";
} else {
  discountRow.style.display = "none";
}
}

function getCart(){
try{
const raw=localStorage.getItem(CART_KEY);
if(!raw)return[];
const data=JSON.parse(raw);
if(!Array.isArray(data))return[];
let changed=false;
data.forEach((item)=>{
if(!item.uid){
item.uid=Date.now().toString(36)+Math.random().toString(36).slice(2);
changed=true;
}
if(item.price===33){item.price=35;changed=true;}
if(item.price===46){item.price=48;changed=true;}
if(item.price===50){item.price=52;changed=true;}
if(item.price===49){item.price=37;changed=true;}
});
if(changed)localStorage.setItem(CART_KEY,JSON.stringify(data));
return data;
}catch{
return[];
}
}

function saveCart(cart){
localStorage.setItem(CART_KEY,JSON.stringify(cart));
}

function getCartCount(){
return getCart().reduce((sum,item)=>sum+(item.quantity||0),0);
}

function getCartTotal(){
return getCart().reduce((total,item)=>total+item.price*item.quantity,0);
}

function isSameEntry(a,b){
return a.id===b.id&&
a.name===b.name&&
a.price===b.price&&
(a.backprint||"")===(b.backprint||"");
}

function showCartToast(name){
let toast=document.getElementById("cart-toast");
if(!toast){
toast=document.createElement("div");
toast.id="cart-toast";
document.body.appendChild(toast);
}
toast.innerHTML=`<span class="cart-toast-icon">✅</span><span class="cart-toast-text"><strong>${name}</strong> wurde zum Warenkorb hinzugefügt!</span>`;
toast.classList.remove("cart-toast--hide");
toast.classList.add("cart-toast--show");
clearTimeout(toast._hideTimer);
toast._hideTimer=setTimeout(()=>{
toast.classList.remove("cart-toast--show");
toast.classList.add("cart-toast--hide");
},3000);
}

function addToCart(newItem){
const cart=getCart();
const existing=cart.find((item)=>isSameEntry(item,newItem));

if(existing){
existing.quantity+=newItem.quantity;
}else{
cart.push({...newItem,uid:Date.now().toString(36)+Math.random().toString(36).slice(2)});
}

saveCart(cart);
renderCart();
showCartToast(newItem.name);
}

function updateQuantity(uid,quantity){
const cart=getCart();
const item=cart.find((entry)=>entry.uid===uid);
if(!item)return;

item.quantity=Math.max(0,quantity);
if(item.quantity===0){
removeFromCart(uid);
return;
}

saveCart(cart);
renderCart();
}

function removeFromCart(uid){
const cart=getCart().filter((item)=>item.uid!==uid);
saveCart(cart);
renderCart();
}

function clearCart(){
localStorage.removeItem(CART_KEY);
renderCart();
}

function updateCartCount(){
const count=getCartCount();
const badge=document.getElementById("cart-count");
if(badge)badge.textContent=count;
const mobileBadge=document.getElementById("cart-count-mobile");
if(mobileBadge)mobileBadge.textContent=count;
}

function renderCart(){
const container=document.getElementById("cart-items");
const message=document.getElementById("cart-empty");
const totalEl=document.getElementById("cart-total");
const cart=getCart();

if(!container||!totalEl||!message)return;

container.innerHTML="";

if(cart.length===0){
message.style.display="block";
totalEl.textContent="0.00";
updateCartCount();
return;
}

message.style.display="none";

cart.forEach((item)=>{
const itemEl=document.createElement("div");
itemEl.className="cart-item";

const sizeHtml=item.size
?`<span class="cart-size-badge">Size:${item.size}</span>`
:"";
const backprintHtml=item.backprint
?`<div class="cart-addons-info">✏️ Backprint:${item.backprint}</div>`
:"";

itemEl.innerHTML=`
<div class="cart-item-image"><img src="${item.image||'https://via.placeholder.com/60x60?text=Jersey'}" alt="${item.name}" width="60" height="60"/></div>
<div class="cart-item-details">
<h3>${item.name}${sizeHtml}</h3>
${backprintHtml}
<div class="cart-item-meta">
<span class="cart-price">CHF ${item.price.toFixed(2)}</span>
<span class="cart-subtotal">Subtotal CHF ${(item.price*item.quantity).toFixed(2)}</span>
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

totalEl.textContent=getCartTotal().toFixed(2);
updateDiscountUI();

container.querySelectorAll(".qty-btn").forEach((btn)=>{
btn.addEventListener("click",()=>{
const uid=btn.dataset.uid;
const action=btn.dataset.action;
const item=getCart().find((i)=>i.uid===uid);
if(!item)return;
const nextQty=action==="increase"?item.quantity+1:item.quantity-1;
updateQuantity(uid,nextQty);
updateCartCount();
});
});

container.querySelectorAll(".remove-btn").forEach((btn)=>{
btn.addEventListener("click",()=>{
removeFromCart(btn.dataset.uid);
updateCartCount();
});
});

updateCartCount();
}

if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",()=>{renderCart();initDiscountUI();});
}else{
renderCart();
initDiscountUI();
}

function initDiscountUI(){
const applyBtn=document.getElementById("discount-apply-btn");
const input=document.getElementById("discount-input");
const msg=document.getElementById("discount-msg");
if(!applyBtn||!input)return;

async function tryApply(){
applyBtn.disabled=true;
applyBtn.textContent="…";
const result=await applyDiscountCode(input.value);
applyBtn.disabled=false;
if(result.ok){
msg.textContent=t("cart.discount.ok",{p:result.percent});
msg.className="discount-msg discount-ok";
input.disabled=true;
applyBtn.textContent=t("cart.discount.remove");
applyBtn.onclick=removeAndReset;
}else{
msg.textContent=t("cart.discount.err");
msg.className="discount-msg discount-err";
applyBtn.textContent=t("cart.discount.apply");
}
renderCart();
}

function removeAndReset(){
removeDiscount();
input.disabled=false;
input.value="";
msg.textContent="";
msg.className="discount-msg";
applyBtn.textContent=t("cart.discount.apply");
applyBtn.onclick=tryApply;
renderCart();
}

applyBtn.onclick=tryApply;
input.addEventListener("keydown",(e)=>{if(e.key==="Enter")tryApply();});
}