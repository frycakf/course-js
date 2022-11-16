console.log(jonas.__proto__);

// Object.prototype (top of chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 6, 9, 9, 4, 7, 7]; // btw this is the same as: new Array()
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Extending array functionality
Array.prototype.unique = function () {
  return [...new Set(this)];
}
console.log(arr);
console.log(arr.unique());

// do not extend build-in object functionality
// 1. in can collide with future JS methods
// 2. when working in team in many developers - can cause bugs

const h1 = document.querySelector('h1');
console.dir(x => x + 1);