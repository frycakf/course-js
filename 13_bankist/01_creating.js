// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); // 1st element that matches
const allSections = document.querySelectorAll('.section'); // returns Node list
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // returns HTML collection → is refreshed automatically
console.log(allButtons);

document.getElementsByClassName('btn'); // returns HTML collection

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // as the 1st child
header.append(message); // as the last child
// header.append(message.cloneNode(true)) // deep = all the child elements will be copied

// header.before(message); // as a sibling
// header.after(message); // as a sibling