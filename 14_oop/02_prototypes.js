// CONSTRUCTOR FUNCTIONS
const Person = function (firstName, birthYear) {
  // Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods
  // never do this !!! - bad for performance
  // by this, we add this method to every created object - this way we create copies
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }
}

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// we can create as many 'instances' as we want
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false