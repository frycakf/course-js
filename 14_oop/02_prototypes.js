'use strict';

const Person  = function (firstName, birthYear)  {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// Person.prototype in NOT prototype of person: proof is below
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));