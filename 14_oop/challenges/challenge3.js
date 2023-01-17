'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going in speed of ${this.speed}`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
}

const bmw = new Car('BMW', 120);

bmw.accelerate();

// Electric vehicle

const EV = function (make, speed, charge) {
    Car.call(this, make, speed)

    this.charge = charge;
}

// Link the prototypes
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = Car;

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(this.charge);
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge = this.charge - 1;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();