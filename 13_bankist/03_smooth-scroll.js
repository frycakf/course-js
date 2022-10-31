const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // Scrolll position
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y): ', window.pageXOffset, window.pageYOffset);

  // Window size
  console.log('height/width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);

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
})