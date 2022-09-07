'use strict';

// Immediatelly Invoked Function (IIFE)

// We dont want to call it like this (we store it)
const runOnce = function() {
  console.log('This will never run again');
}
runOnce();

// Correct way 1
(function() {
  console.log('This will never un again');
})();

// Correct way 2
() => console.log('This will also never run again')();

// Why do we want to do this? To hide variables = private variables (data encapsulation)