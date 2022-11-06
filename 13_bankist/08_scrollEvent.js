// Old school
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
  else nav.classList.remove('sticky');
})