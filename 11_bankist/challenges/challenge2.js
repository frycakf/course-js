'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const caclAverageHumanAge = function (ages) {
  const dogAges = ages;
  console.log(ages);

  // Calculate human ages
  const humanAges = dogAges.map(dogAge => {
    return dogAge <= 2 ? dogAge * 2 :16 + dogAge * 4;
  });
  console.log(humanAges);

  // Filter age < 18
  const filterAges = humanAges.filter(function(humanAge) {
    return humanAge >= 18;
  })
  console.log(filterAges);

  // Calc average human age
  const averageAge = humanAges.reduce(function(acc, el) {
    return acc + el
  }, 0) / humanAges.length ;
  console.log(averageAge);
}

caclAverageHumanAge(data1)

// === JONAS SOLUTION ===

const calcAverageHumanAge = function(arr) {
  return arr
    .map(function(dogAge) {
      return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
    })
    .filter(humanAge => humanAge > 18)
    .reduce((sum, age, index, arr) => sum + age / arr.length);
}

console.log(calcAverageHumanAge(data1));
