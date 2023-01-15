'use strict';

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
}

const bmw = new Car('BMW', 50);
bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.brake()
bmw.brake()
bmw.brake()

const mercedes = new Car('Mercedes', 95)
mercedes.accelerate()
mercedes.accelerate()
mercedes.accelerate()
mercedes.brake()

console.log(Car.__proto__);
