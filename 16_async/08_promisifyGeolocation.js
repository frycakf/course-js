console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject()
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const {latitude: lat, longitude: lng} = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    })
    .then(response =>  response.json())
    .then(data => {
      // console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderCountry(data[0])
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    })
}

btn.addEventListener('click', whereAmI)