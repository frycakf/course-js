'use strict';

// Generic functions
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others]= str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // getting function name: fn.name
}

transformer('JavaScript is the best!', upperFirstWord); // upperFirstWord is called 'call back fc'
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
  console.log('🤘');
}

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

// Excercise
const name = 'Filip';
const spellName = function(name, fn) {
  for(let i = 0; i < name.length; i++) {
    fn(name, i)
  }
}

const printLetter = function(str, i) {
  console.log(str[i]);
}

spellName('Augustyn', printLetter);