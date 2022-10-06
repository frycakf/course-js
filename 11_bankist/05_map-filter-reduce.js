const movementsUSD = movements.map(mov => mov * eurToUsd);

// const movementsUSD = [];
// for (const mov of movements) {
//   movementsUSD.push(mov * eurToUsd);
// }


const movementsDescriptions = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov >0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

// console.log(movementsDescriptions);

const deposits = movements.filter(function(mov) {
  return mov > 0;
})

const withdrawals = movements.filter(function(mov) {
  return mov < 0;
})

const balance = movements.reduce(function(acc, cur, i, arr) {
  // console.log(`Iteration number ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);
console.log(balance);

const years = [2020, 2021, 2022, 2023, 2024, 2025]

// Maximum
const max = movements.reduce(function(acc, cur) {
  return acc > cur ? acc : cur;
}, movements[0]);

// console.log(max);


// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);