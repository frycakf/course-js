'use strict';

const CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    console.log(`The current speed is ${this.speed / 1.6} mi/h.`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new CarCl('Ford', 120);
car1.accelerate();
car1.speedUS = 50;
console.log(car1)