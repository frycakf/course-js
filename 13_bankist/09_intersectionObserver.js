// Old school
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
  else nav.classList.remove('sticky');
})

// INTERSECTION OBSERVER
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
};

const obsOptions = {
  root: null, // root = viewport
  threshold: [0, 0.2]
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);