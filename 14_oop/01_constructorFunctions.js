// CONSTRUCTOR FUNCTIONS
const Person = function (firstName, birthYear) {
  // Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods
  // never do this !!! - bad for performance
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// we can create as many 'instances' as we want
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);

const jay = 'Jay';
console.log(jay instanceof Person);