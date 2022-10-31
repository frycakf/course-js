// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // this does not work
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // returns absolute path
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

console.log(logo.designer); // not standard properties are NOT created by default
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');

// Data attributes
console.log(logo.dataset.versionNumber)

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Dont use - overwrites existing classes
logo.className = 'Jonas';