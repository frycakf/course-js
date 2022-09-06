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

lufthansa.book(239, 'Filip Frycak');
lufthansa.book(635, 'John Smith');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book; // takto si vykopiruju metodu z existujiciho objektu

// book(23, 'Sarah Wiliams'); // does NOT work because it does not know what 'this' keyword is

// Call() method 
// we simply can manipulate 'this' keyword → need to tell JS explicitly, what "this" keyword points to
book.call(euroWings, 23, 'Sarah Wiliams');
console.log(euroWings);

book.call(lufthansa, 666, 'Angus Young');
console.log(lufthansa);

const swissArmy = {
  airline: 'SwissArmy',
  iataCode: 'SA',
  bookings: []
}

book.call(swissArmy, 123, 'My Jsme Bratri');
console.log(swissArmy);

// Apply() method - does exactly the same as call(), except it accepting array of arguments
const flightData = [987, 'George Cooper'];
book.apply(swissArmy, flightData);
console.log(swissArmy);

// These days, we dont use Apply anymore thanks to SPREAD OPERATOR
book.call(swissArmy, ...flightData)