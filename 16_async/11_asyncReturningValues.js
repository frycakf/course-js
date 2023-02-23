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

console.log('1: Will get location');

// const city = whereAmI();
// console.log(city); // <= THIS RETURNS A PROMISE (which we dont want) !!!

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'))

// IN THE FUNCTION ABOVE, IT IS NOT NICE THAT WE USE OLD SYNTAX (then()) WITH NEW SYNTAX (catch())
// SO WE USE IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(city)
  } catch (err) {
    console.error(`2: ${err.message}`)
  }
  console.log('3: Finished getting location')
})();