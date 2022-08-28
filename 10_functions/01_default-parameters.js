// 128. Default Parameters

'use strict';

const bookings = [];

const createBooking = function(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
  ) {
  
  // old way of setting default parameters (pre ES6)
  // numPassengers = numPassengers || 1; 
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123', 2);
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

// createBooking('LH123', , 199) // we cannot skip arguments this way when calling function
createBooking('LH123', undefined, 1000); // we skip it with 'undefined'