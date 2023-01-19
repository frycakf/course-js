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
    }

    withdrawal(val) {
        this.deposit(-val);
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved.');
        }
    }

    // 4) Private methods
    _approveLoan() {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);


// console.log(acc1.#movements);
// console.log(acc1.#pin);
console.log(acc1.getMovements());
console.log(acc1.#approveLoan(100));