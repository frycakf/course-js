'use strict';

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}.`);
    }

    // Public interface of objects
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdrawal(val) {
        this.deposit(-val);
    }

    _approveLoan() {
        return true;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved.');
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1);
console.log(acc1.pin);
console.log(acc1.getMovements());
