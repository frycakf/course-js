let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - does not mutate the original array
console.log(arr.slice(2)); // only start parameter
console.log(arr.slice(2, 4)); // start and end index parameter
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// creating a SHALLOW COPY (which method you use is up to you)
console.log(arr.slice()); 
console.log([...arr]);

// SPLICE - does mutate the original array
// console.log(arr.splice(2));
// arr.splice(-1); // remove last element
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log([...arr, ...arr2]);
console.log(letters);

// JOIN
console.log(letters.join(' - '));