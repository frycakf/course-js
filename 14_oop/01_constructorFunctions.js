'use strict';

// CONSTRUCTOR FUNCTIONS
// 1. New empty object is created
// 2. Function os called, this = new empty object
// 3. New object is linked to prototype
// 4. Function automatically returns the object

const Person  = function (firstName, birthYear)  {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this: never create methods inside constructor functions
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }
}

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
const jay = 'Jay';

console.log(jonas);
console.log(matilda);
console.log(jack);

console.log(jay instanceof Person);