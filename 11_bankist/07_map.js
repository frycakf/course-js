const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// console.log(movements)
//
// // EQUALITY
// console.log(movements.includes(-130));
//
// // CONDITION
// console.log(movements.some(mov => mov === -130));
//
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);
//
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr.flat()); // only goes one level deep (by default)
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements)
//
// const allMovements = accountMovements.flat();
// console.log(allMovements)
//
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance)


const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2)