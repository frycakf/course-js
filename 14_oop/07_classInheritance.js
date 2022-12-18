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