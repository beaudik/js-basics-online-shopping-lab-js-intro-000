var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  //var array1 = ['a', 'b', 'c'];
if (!cart.findIndex) return `That item is not in your cart.`
cart.forEach(function(element) {
  if (element == item){
  cart.splice(cart.indexOf(element), 1);
  return cart



});
}

function placeOrder(cardNumber) {
  // write your code here
}
