console.log(23 === 23.0)

// Base 10: 0 to 9
// Binary base 2: 0 1
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

// Convert strings to numbers
console.log(Number('23'));
console.log(+'23')

// Parsing
console.log(Number.parseInt('30px', 10)); // Base10
console.log(Number.parseInt('30px', 2)); // Base2
console.log(Number.parseInt('e30px', 10)); // NOT WORKING → string needs to start by number

console.log(Number.parseFloat('2.5rem'));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(23 / 0));

// Best method to check if values is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));

console.log(Number.isInteger(23))
console.log(Number.isInteger(23.0))
console.log(Number.isInteger(23 / 0))