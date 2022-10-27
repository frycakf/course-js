// Remainder
console.log(5 % 2)
console.log(8 / 3)
console.log(8 % 3) // 8 = 2 * 3 + 2

// Checking if number is even or odd
console.log(6 % 2) // = 0 = false
console.log(7 % 2) // = 1 = true

const isEven = n => n % 2 === 0;
console.log(isEven(1));
console.log(isEven(4));
console.log(isEven(23));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  })
})