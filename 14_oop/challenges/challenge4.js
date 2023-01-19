'use strict';

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going in speed of ${this.speed}`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going in speed of ${this.speed}`);
        return this;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} is now charged to ${this.#charge}`);
        return this;
    }

    accelerate() {
        this.speed += 10;
        this.#charge--;
        console.log(`${this.make} is going in speed of ${this.speed}, charged to ${this.#charge}`);
    }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate();
// console.log(rivian.#charge);
rivian.brake().accelerate();