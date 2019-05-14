var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 /*The `addToCart()` function accepts one argument, the name of an item.
     + Use that passed-in string to create a new object representing the item. The object should consist of two key-value pairs : `{ itemName: name of the item, itemPrice: price of the item, }`. As more items are added, the `cart` should start to look something like this: `[ {  itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]`.
     + The price of each item should be a randomly-generated integer between 1 and 100.
       * ***HINT***: Look into `Math.random()` and `Math.floor()`.
     + Upon the successful addition of a new item to the cart, the function should return `<itemName> has been added to your cart.` .*/
     var itemObj = {
       itemName : item,
       itemPrice : Math.floor((Math.random() * 100) + 1)

     }
      return `itemObj.itemName() has been added to your cart.`
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
