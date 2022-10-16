const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

console.log(movements);


// return < 0 = A, B (keep order)
// return > 0 = B, A (switch order)

// asc
movements.sort((a, b) => {
    if (a > b) return 1;
    if (b < a) return -1;
})
console.log(movements)

// desc
movements.sort((a, b) => {
    if (a < b) return 1;
    if (b > a) return -1;
})
console.log(movements)

// simpler syntax
movements.sort((a, b) => a - b)