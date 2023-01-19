'use strict';

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
    // 1) Public field (instances)
    locale = navigator.language;

    // 2) Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        // protected property
        this.#pin = pin;
        // this.#movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}.`);
    }

    // 3) Public methods
    // Public interface of objects
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this; // for chaining, the function must return this
    }

    withdrawal(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved.');
            return this; // for chaining, the function must return this
        }
    }

    // 4) Private methods
    _approveLoan() {
        return true; // for chaining, the function must return this
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);


// console.log(acc1.#movements);
// console.log(acc1.#pin);
console.log(acc1.getMovements());
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).withdrawal(4000);
console.log(acc1.getMovements());