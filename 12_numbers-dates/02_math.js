console.log(Math.sqrt(25)) // square root
console.log(25 ** (1/2)) // square root
console.log(8 ** (1/3)) // cubic root

console.log(Math.max(5, 18, 23, 11, 2)); // returns maximum number
console.log(Math.min(5, 18, 23, 11, 2)); // returns minimum number

console.log(Math.PI * Number.parseFloat('10px') ** 2); // circle around

console.log(Math.trunc(Math.random() * 6) + 1); // random dice roll

// Random number in given range
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 50));

// ROUNDING
console.log(Math.trunc(23.3)); // removes decimal part (vs. floor - absolute)
console.log(Math.round(23.9)); // round to near int
console.log(Math.ceil(23.1)); // always round up
console.log(Math.floor(23.9)); // always round down

console.log(Math.ceil(-23.1)); // always round up
console.log(Math.floor(-23.9)); // always round down

// ROUNDING DECIMALS
console.log((2.7).toFixed((0)));
console.log((2.7).toFixed((3)));
console.log((2.345).toFixed((2))); // results in string type
console.log(+(2.345).toFixed((2))); // turn into number type