const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// why to use at() - methods of getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// .at() works also with strings
console.log('jonas'.at(0));
console.log('jonas'.at(-1));