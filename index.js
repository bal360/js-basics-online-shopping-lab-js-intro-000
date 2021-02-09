var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const newItem = {
   itemName: item, 
   itemPrice: Math.floor(Math.random() * 100)
  }
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length >= 2) {
    let itemsString = "In your cart, you have"
    const {itemName, itemPrice} = cart[cart.length - 1]
    for (let i = 0; i < cart.length - 1; i++) {
      itemsString += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    return `${itemsString} and ${itemName} at $${itemPrice}.`
  }
  return "Your shopping cart is empty."
}

function total() {
  return cart.reduce((acc, item) => acc + item.itemPrice, 0)
}

function removeFromCart(item) {
  // for (let i = 0; i < cart.length; i++) {
  //   if (cart[i].itemName === item) {
  //     cart.splice(i, i+1)
        // return cart
  //   }
  // }
  return cart.indexOf() === -1 ? "That item is not in your cart." : cart.filter(cartItem => cartItem.itemName !== item)
}

function placeOrder(cardNumber) {
  // write your code here
}


// function removeFromCart(item) {
//   for (var i = 0; i < cart.length; i++){
//    if (item === cart[i].itemName) {
//      cart.splice(i, 1);
//      return cart;
//    }
//  }
//  return 'That item is not in your cart.'
// }