console.log(2 ** 53 - 1); // this is the biggest number
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);

console.log(8798791797979719797979719798791797n); // n transform regular number to bigInt
console.log(BigInt(8798791797979719797979719798791797));

// Operations
console.log(10000n + 10000n);
console.log(68798789179798798n * 687897197987197n);

const huge = 5517987918798797979987197n;
const num = 23;
// console.log(huge * num); // THIS WON'T WORK
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20); // type coertion
console.log(typeof 20);
console.log(20n == 20); // without type coertion