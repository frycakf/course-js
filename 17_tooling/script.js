import * as ShoppingCart from './shoppingCart.js'
import {cart} from "./shoppingCart.js";


// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   // console.log(data);
//
//   return {title: data.at(-1).title, text: data.at(-1).body}
// }
//
// const lastPost = getLastPost();
//
// // Not very clean
// // lastPost.then(last => console.log(last));
//
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function() {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//
//   const addToCart = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`);
//   }
//
//   const orderStock = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} ordered from supplier`);
//   }
//
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity
//   }
// })();
//
// ShoppingCart2.addToCart('apple', 4)
// ShoppingCart2.addToCart('pizza', 2)
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // = not exported = undefined

import clodeDeep from './node_modules/lodash-es/cloneDeep.js'
import clodeDeep from 'lodash-es'
// import clodeDeep from 'lodash

const state = {
  cart: [
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 5},
  ],
  user: {loggedIn: true}
}

const stateClone = Object.assign({}, state);
const stateDeepClone = clodeDeep(state);
state.user.loggedIn = false;
console.log(stateClone);


console.log(stateDeepClone);

// if(module.hot) {
//   module.hot.accept()
// }

Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable'
import 'core-js/stable/array/find'

// Polyfilling async functions
import 'regenerator-runtime/runtime'