const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0]

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} !!!`);
      renderError(`Something went wrong! ${err.message}. Try again!`)
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    })
}

btn.addEventListener('click', function () {
  getCountryData('portugal');
})

getCountryData('asdasdasdas')