'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header'); // 1st element that matches

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message); // as the last child

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.parentElement.removeChild(message); // old way
  message.remove(); // new way
})

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // Scrolll position
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y): ', window.pageXOffset, window.pageYOffset);

  // Window size
  // console.log('height/width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Oldest way
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // Old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // Modern way
  section1.scrollIntoView({behavior: 'smooth'});
});

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