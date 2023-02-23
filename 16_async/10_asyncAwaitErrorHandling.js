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
  } catch (err) {
    console.log(`Something went wrong :( ${err.message}`);
  }
}
whereAmI()