// Numeric separator
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415
// const PI = 3._1415 // THIS IS NOT ALLOWED

console.log(Number('230000'));
console.log(Number('230_000')); // THIS WON'T WORK → NaN
console.log(parseInt('230_000')); // this will result in 230 only