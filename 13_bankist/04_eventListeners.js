const h1 = document.querySelector('h1');

// Other way of defining - THIS IS PRETTY OLD SCHOOL
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// This is better because:
// this way we can define more eventListeners on one element
// this way we can remove eventListeners