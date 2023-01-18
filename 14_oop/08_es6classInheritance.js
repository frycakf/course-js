class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

// This is how you extend existing class
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Needs to happen first!
        super(fullName, birthYear)
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I am ${2037 - this.birthYear} years old, but I feel like ${2037 - this.birthYear + 10}`);
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
