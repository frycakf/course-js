'use strict';

const CarCl = class {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
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
        console.log(this.speed / 1.6);
    }

    set speedUS(speedKM) {
        this.speed = speedKM * 1.6;
    }
}

const bmw = new CarCl('BMW', 100);

bmw.accelerate();
bmw.brake();
bmw.speedUS;
bmw.speedUS = 100;
console.log(bmw);