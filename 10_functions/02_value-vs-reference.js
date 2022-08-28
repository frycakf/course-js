// 129. How Passing Arguments Works: Value vs. Reference

'use strict';

const flight = 'LH1234';
const filip = {
  name: 'Filip Frycak',
  passport: 987646131681
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999' // values are copied - passing a primive types creates copy
  passenger.name = 'Mr. ' + passenger.name; // reference types are the same object in memory heap

  if(passenger.passport === 987646131681) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
}

checkIn(flight, filip);
console.log(flight);
console.log(filip);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(filip);
checkIn(flight, filip);