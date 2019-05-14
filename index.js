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
     cart.push(itemObj)

      return `${itemObj.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0){
  return `Your shopping cart is empty.`
}else if(cart.length ==1){
  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
}else{
  var inCart = []
  for(var i=0; i < cart.length; i++){
    let output = "";
      if (i == 0) output = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (i !== 0 && i !==cart.length-1) output = `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (i ==cart.length-1) output = `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;

     inCart.push(output)

}
return inCart.join(', ')
}
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  //var array1 = ['a', 'b', 'c'];
/*if (!cart.findIndex) return `That item is not in your cart.`
cart.forEach(function(element) {
  if (element == item){
  cart.splice(cart.indexOf(element), 1);
  return cart



});*/
}

function placeOrder(cardNumber) {
  // write your code here

}
