'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const caclAverageHumanAge = function (ages) {
  const dogAges = ages;
  console.log(ages);

  // Calculate human ages
  // Calc average human age
  const averageAge = dogAges
    .map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4)
    .filter(age => age >= 18)
    .map((humanAge, _, dogAges) => humanAge / dogAges.length)
    .reduce((sum, fraction) => sum + fraction, 0);
  console.log(averageAge);
}

caclAverageHumanAge(data1)