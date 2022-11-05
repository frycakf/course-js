const h1 = document.querySelector('h1');

// GOING DOWNWARDS:
// All child
console.log(h1.querySelectorAll('.highlight'));

// Direct child
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// GOING UPWARDS
// Direct parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// GOING SIDEWAYS (in JS we can select only direct siblings)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// selecting all siblings trick
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
})