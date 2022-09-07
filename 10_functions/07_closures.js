'use strict';

// CLOSURES

const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

//booker();
//booker();
//booker();

console.dir(booker)

let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

g();
f();

// Re-assigned f function
h();
f();

console.dir(f);

const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} paasengers`);
  }, wait * 1000)

  console.log(`We will start boarding in ${wait} seconds`);
}

const perGroup = 1000; // Closures has priority over the scope chain (perGroupt remains n/3)
boardPassengers(180, 3);