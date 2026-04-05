const CART_KEY="\u006a\u0065\u0072\u0073\u0065\u0079\u0068\u0075\u0062\u005f\u0063\u0061\u0072\u0074";

let activeDiscountCode=null;
let activeDiscountPercent=0;

async function applyDiscountCode(code){
try{
const res=await fetch("\u002f\u0061\u0070\u0069\u002f\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002f\u0076\u0061\u006c\u0069\u0064\u0061\u0074\u0065",{
method:"\u0050\u004f\u0053\u0054",
headers:{"\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":"\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e"},
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
function getDiscountedTotal(){
const raw=getCartTotal();
return+(raw*(1-activeDiscountPercent/100)).toFixed(2);
}

function updateDiscountUI(){
const discountRow=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u0072\u006f\u0077");
const finalRow=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0066\u0069\u006e\u0061\u006c\u002d\u0072\u006f\u0077");
const discountAmount=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u0061\u006d\u006f\u0075\u006e\u0074");
const finalTotal=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0066\u0069\u006e\u0061\u006c\u002d\u0074\u006f\u0074\u0061\u006c");
if(!discountRow)return;
if(activeDiscountPercent>0){
const raw=getCartTotal();
const saving=+(raw*activeDiscountPercent/100).toFixed(2);
const discounted=getDiscountedTotal();
if(discountAmount)discountAmount.textContent=saving.toFixed(2);
if(finalTotal)finalTotal.textContent=discounted.toFixed(2);
discountRow.style.display="";
if(finalRow)finalRow.style.display="";
}else{
discountRow.style.display="\u006e\u006f\u006e\u0065";
if(finalRow)finalRow.style.display="\u006e\u006f\u006e\u0065";
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
let toast=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0074\u006f\u0061\u0073\u0074");
if(!toast){
toast=document.createElement("\u0064\u0069\u0076");
toast.id="\u0063\u0061\u0072\u0074\u002d\u0074\u006f\u0061\u0073\u0074";
document.body.appendChild(toast);
}
toast.innerHTML=`<span class="cart-toast-icon">✅</span><span class="cart-toast-text"><strong>${name}</strong>wurde zum Warenkorb hinzugefügt!</span>`;
toast.classList.remove("\u0063\u0061\u0072\u0074\u002d\u0074\u006f\u0061\u0073\u0074\u002d\u002d\u0068\u0069\u0064\u0065");
toast.classList.add("\u0063\u0061\u0072\u0074\u002d\u0074\u006f\u0061\u0073\u0074\u002d\u002d\u0073\u0068\u006f\u0077");
clearTimeout(toast._hideTimer);
toast._hideTimer=setTimeout(()=>{
toast.classList.remove("\u0063\u0061\u0072\u0074\u002d\u0074\u006f\u0061\u0073\u0074\u002d\u002d\u0073\u0068\u006f\u0077");
toast.classList.add("\u0063\u0061\u0072\u0074\u002d\u0074\u006f\u0061\u0073\u0074\u002d\u002d\u0068\u0069\u0064\u0065");
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
const badge=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0063\u006f\u0075\u006e\u0074");
if(badge)badge.textContent=count;
const mobileBadge=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0063\u006f\u0075\u006e\u0074\u002d\u006d\u006f\u0062\u0069\u006c\u0065");
if(mobileBadge)mobileBadge.textContent=count;
}

function renderCart(){
const container=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0069\u0074\u0065\u006d\u0073");
const message=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0065\u006d\u0070\u0074\u0079");
const totalEl=document.getElementById("\u0063\u0061\u0072\u0074\u002d\u0074\u006f\u0074\u0061\u006c");
const cart=getCart();

if(!container||!totalEl||!message)return;

container.innerHTML="";

if(cart.length===0){
message.style.display="\u0062\u006c\u006f\u0063\u006b";
totalEl.textContent="\u0030\u002e\u0030\u0030";
updateCartCount();
return;
}

message.style.display="\u006e\u006f\u006e\u0065";

cart.forEach((item)=>{
const itemEl=document.createElement("\u0064\u0069\u0076");
itemEl.className="\u0063\u0061\u0072\u0074\u002d\u0069\u0074\u0065\u006d";

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

container.querySelectorAll("\u002e\u0071\u0074\u0079\u002d\u0062\u0074\u006e").forEach((btn)=>{
btn.addEventListener("\u0063\u006c\u0069\u0063\u006b",()=>{
const uid=btn.dataset.uid;
const action=btn.dataset.action;
const item=getCart().find((i)=>i.uid===uid);
if(!item)return;
const nextQty=action==="\u0069\u006e\u0063\u0072\u0065\u0061\u0073\u0065"?item.quantity+1:item.quantity-1;
updateQuantity(uid,nextQty);
updateCartCount();
});
});

container.querySelectorAll("\u002e\u0072\u0065\u006d\u006f\u0076\u0065\u002d\u0062\u0074\u006e").forEach((btn)=>{
btn.addEventListener("\u0063\u006c\u0069\u0063\u006b",()=>{
removeFromCart(btn.dataset.uid);
updateCartCount();
});
});

updateCartCount();
}

if(document.readyState==="\u006c\u006f\u0061\u0064\u0069\u006e\u0067"){
document.addEventListener("\u0044\u004f\u004d\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004c\u006f\u0061\u0064\u0065\u0064",()=>{renderCart();initDiscountUI();});
}else{
renderCart();
initDiscountUI();
}

function initDiscountUI(){
const applyBtn=document.getElementById("\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u0061\u0070\u0070\u006c\u0079\u002d\u0062\u0074\u006e");
const input=document.getElementById("\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u0069\u006e\u0070\u0075\u0074");
const msg=document.getElementById("\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u006d\u0073\u0067");
if(!applyBtn||!input)return;

async function tryApply(){
applyBtn.disabled=true;
applyBtn.textContent="\u2026";
const result=await applyDiscountCode(input.value);
applyBtn.disabled=false;
if(result.ok){
msg.textContent=t("\u0063\u0061\u0072\u0074\u002e\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002e\u006f\u006b",{p:result.percent});
msg.className="\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u006d\u0073\u0067\u0020\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u006f\u006b";
input.disabled=true;
applyBtn.textContent=t("\u0063\u0061\u0072\u0074\u002e\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002e\u0072\u0065\u006d\u006f\u0076\u0065");
applyBtn.onclick=removeAndReset;
}else{
msg.textContent=t("\u0063\u0061\u0072\u0074\u002e\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002e\u0065\u0072\u0072");
msg.className="\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u006d\u0073\u0067\u0020\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u0065\u0072\u0072";
applyBtn.textContent=t("\u0063\u0061\u0072\u0074\u002e\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002e\u0061\u0070\u0070\u006c\u0079");
}
renderCart();
}

function removeAndReset(){
removeDiscount();
input.disabled=false;
input.value="";
msg.textContent="";
msg.className="\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002d\u006d\u0073\u0067";
applyBtn.textContent=t("\u0063\u0061\u0072\u0074\u002e\u0064\u0069\u0073\u0063\u006f\u0075\u006e\u0074\u002e\u0061\u0070\u0070\u006c\u0079");
applyBtn.onclick=tryApply;
renderCart();
}

applyBtn.onclick=tryApply;
input.addEventListener("\u006b\u0065\u0079\u0064\u006f\u0077\u006e",(e)=>{if(e.key==="\u0045\u006e\u0074\u0065\u0072")tryApply();});
}