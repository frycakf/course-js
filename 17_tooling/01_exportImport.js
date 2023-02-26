// ========= shoppingCart.js =========
// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };

// ========= script.js =========
// console.log(Price, tq);
console.log('Importing module');
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);