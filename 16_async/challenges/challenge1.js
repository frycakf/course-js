'use strict';
// 'https://geocode.xyz/51.50354,-0.12768?geoit=json'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getMyPosition = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, () => {console.log('fail');})
  }
}

function success(position) {
  // console.log(`Latitude : ${position.coords.latitude}`);
  // console.log(`Longitude: ${position.coords.longitude}`);
  whereAmI(position.coords.latitude, position.coords.longitude);
}

getMyPosition()

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0].name}</p>
          <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = '1';
}

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);

      if(!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
}

const whereAmI = function (lat, lng) {
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`

  fetch(url).then(response => {
    if(response.status === 403) {
      throw new Error(`You are way too fast thsis time! (ERROR ${response.status})`);
    }

    return response.json();
  }).then(data => {
      // console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
  }).then(response => {
    return response.json();
  }).then(data => {
    renderCountry(data[0])
  }).catch(error => {
    console.log(error);
  }).finally(() => {
    countriesContainer.style.opacity = '1';
  })
}