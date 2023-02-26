// Importing module
// import { addToCart, totalPrice as Price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(Price, tq);

console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);



