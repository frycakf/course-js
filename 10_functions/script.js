'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {} // old way of creating a method
  book(flightNumber, name) { // new way of creating a method
    console.log(`${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
    this.bookings.push(({
      flight: `${this.iataCode}${flightNumber}`, name
    }))
  }
}

// lufthansa.book(239, 'Filip Frycak');
// lufthansa.book(635, 'John Smith');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const swissArmy = {
  airline: 'SwissArmy',
  iataCode: 'SA',
  bookings: []
}

const book = lufthansa.book; // takto si vykopiruju metodu z existujiciho objeku

// With the bind() method, an object can borrow a method from another object
// book.bind(23, 'Filip Frycak');

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swissArmy);
// bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(euroWings, 23); // First parameter 'set in stone' set book(flightNum, name)
// bookEW23('Filip JS');
// bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}

// This is not working (this keyword points to the .btn element)
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// We need to bind 'this' keyword to the object like this
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (presetting parameters)
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // with 'null' we skip the parameter 
console.log(addVAT(23));

// Challenge
const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}

const addVat2 = addTaxRate(0.23)
console.log(addVat2(23));