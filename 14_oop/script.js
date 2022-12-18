'use strict';

// Class expression
// const PersonCl = class {
//
// }

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name)
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name!`)
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 🖐');
  }
}

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica)
// jessica.calcAge();
// console.log(jessica.age);

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// }

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (pass them and return them into functions)
// 3. Classes are executed in strict mode

// PersonCl.hey();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
  // This is bad, redundant code
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // This way is correct
  Person.call(this, firstName, birthYear); // call + this (first param)

  this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype); // we need to do this exactly here

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor)