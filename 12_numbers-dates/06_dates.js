// const now = new Date();
// console.log(now)
//
// console.log(new Date('Thu Oct 27 2022'));
// console.log(new Date('December 24, 2015'));
//
// console.log(new Date(account1.movementsDates[0]));
//
// console.log(new Date(2037, 10, 19, 15, 23, 5))
// console.log(new Date(2037, 10, 31));
//
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future)
console.log(future.getFullYear()); // NEVER USE getYear()
console.log(future.getMonth()); // THIS IS ZERO BASED
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);