// This is INEFFICIENT: adding eventListener to many elements
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); // vs. this.href
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// })

// This is EFFICIENT: with event delegation
// 1. add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e){

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href'); // vs. this.href
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})