'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(arr) {
  return arr
    .map(function(dogAge) {
      return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
    })
    .filter(humanAge => humanAge > 18)
    .reduce((sum, age, index, arr) => sum + age / arr.length);
}

console.log(calcAverageHumanAge(data1));
