'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// https://restcountries.com/v2/


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
  countriesContainer.style.opacity = '1';
}


// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg)
//   // countriesContainer.style.opacity = 1;
// }

/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this);

    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
    console.log(data);

    const [neighbour] = data.borders;

    if(!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    })
  })
}

getCountryAndNeighbour('germany'); */

// Old way
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// New way
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//     .then(function (data) {
//     console.log(data[0]);
//   })
// }

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if(!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }
//
//     return response.json();
//   })
// }

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//
//       if(!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0]
//       const neighbour = 'asjdalksjdh';
//
//       if (!neighbour) return;
//
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//     })
//     .then(response => {
//
//       if(!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//
//       return response.json()
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} !!!`);
//       renderError(`Something went wrong! ${err.message}. Try again!`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     })
// }

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
//     .then(data => {
//       renderCountry(data[0]);
//
//       const neighbour = data[0].hasOwnProperty('borders') && data[0].borders[0];
//
//       if (!neighbour) {
//         throw new Error('No neighbour found!');
//       }
//
//       // Country 2
//       return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, `Country not found`)
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}!!!`);
//       renderError(`Something went wrong! ${err.message}. Try again!`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     })
// }
//
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// })
//
// getCountryData('australia')

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening...');
//   setTimeout(function () {
//     if(Math.random() >= 0.5) {
//       resolve('You WIN!')
//     } else {
//       reject(new Error('You lost your money.'))
//     }
//   }, 1000)
// })
//
// lotteryPromise
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//
// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000)
//   })
// }
//
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   })
//
// // Resolving and rejecting immediately
// Promise.resolve('abc')
//   .then(x => console.log(x))
//
// Promise.reject('abc')
//   .catch(x => console.error(x))


// console.log('Getting position');
//
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject()
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
// }
//
// // getPosition().then(pos => console.log(pos));
//
// const whereAmI = function () {
//   getPosition().then(pos => {
//     const {latitude: lat, longitude: lng} = pos.coords;
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   })
//   .then(response =>  response.json())
//   .then(data => {
//     // console.log(`You are in ${data.city}, ${data.country}`);
//     return fetch(`https://restcountries.com/v2/name/${data.country}`);
//   })
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     renderCountry(data[0])
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = '1';
//   })
// }
//
// btn.addEventListener('click', whereAmI)

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition()
    const {latitude: lat, longitude: lng} = pos.coords

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    if(!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json()

    // Country data
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`)
    if(!res.ok) throw new Error(`Problem getting country`);
    const data = await res.json()

    renderCountry(data[0])

    return `You are in ${dataGeo.city}, ${dataGeo.country}`
  } catch (err) {
    console.log(`Something went wrong :( ${err.message}`);

    // Reject promise returned from async function
    throw err; // <= THIS IS IMPORTANT!!!
  }
}

// console.log('1: Will get location');

// const city = whereAmI();
// console.log(city); // <= THIS RETURNS A PROMISE (which we dont want) !!!

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'))

// IN THE FUNCTION ABOVE, IT IS NOT NICE THAT WE USE OLD SYNTAX (then()) WITH NEW SYNTAX (catch())
// SO WE USE IIFE
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city)
//   } catch (err) {
//     console.error(`2: ${err.message}`)
//   }
//   console.log('3: Finished getting location')
// })();

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  })
}

const get3Countries = async function(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`)
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`)
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`)
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`)
    ])

    console.log(data.map(d => d[0].capital));

  } catch (err) {
    console.log(err);
  }
}

get3Countries('portugal', 'canada', 'tanzania');
