// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) =>
    console.log(`Her is your pizza 🍕 with ${ing1}, ${ing2}`),
  1000, ...ingredients); // if arguments needed, they are passed after timeout
console.log('Waiting...');

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}

// setInterval
setInterval(function () {
  const now = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const nowFormatted = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  console.log(nowFormatted);

}, 1000);
