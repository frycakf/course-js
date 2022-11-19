/* === SETTERS and GETTERS === */
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  // getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // setter
  set latest(mov) { // exactly one parameter
    this.movements.push(mov);
  }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

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
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica)
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);