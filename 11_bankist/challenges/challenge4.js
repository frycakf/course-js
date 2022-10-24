'use strict';

const dogs = [
  {
    weight: 22,
    curFood: 20,
    owners: ['Alice', 'Bob']
  }, {
    weight: 8,
    curFood: 200,
    owners: ['Mathilda']
  }, {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John']
  }, {
    weight: 32,
    curFood: 340,
    owners: ['Michael']
  }
];

// Task 1
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
})
// console.log(dogs)

// Task 2

const eatTooMuch = function (curFood, recommendedFood) {
  if (curFood < recommendedFood * 0.9) {
    return false;
  } else if (curFood > recommendedFood * 1.1) {
    return true;
  }
}

dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    // console.log(eatTooMuch(dog.curFood, dog.recommendedFood));
  };
})

// console.log(dogs);

// Task 3

const owners = dogs
  .reduce((dogs, cur) => {
    eatTooMuch(cur.curFood, cur.recommendedFood) ? dogs.ownersEatTooMuch.push(cur.owners) : dogs.ownersEatTooLittle.push(cur.owners)
    return dogs;
  }, {ownersEatTooMuch: [], ownersEatTooLittle: []})

// console.log('Too much ' + ownersEatTooMuch);
// console.log('Too little ' + ownersEatTooLittle);

// Task 4
console.log(`${owners.ownersEatTooMuch.flat().join(' and ')}'s dog eat too much!`);
console.log(`${owners.ownersEatTooLittle.flat().join(' and ')}'s dog eat too little!`);


// Task 5
const containsExact = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(containsExact)

// Task 6
const containsOk = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(containsOk)

// Task 7
const checkEatingOkay = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
const dogsOkay = dogs.filter(checkEatingOkay);
console.log(dogsOkay)

// Task 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);