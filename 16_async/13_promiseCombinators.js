// ========================= OTHER PROMISE COMBINATORS =========================

// Promise.race
const fc = async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
};

// fc();

const timeout = function (sec) {
  return new Promise(function(_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'))
    }, sec * 1000)
  })
}

Promise.race([
  getJSON(`https://restcountries.com/v2/name/italy`),
  timeout(0.1)
]).then(res => console.log(res[0])).catch(err => console.error(err));

// Promise.allSettled (vs. Promise.all) (ES2019)
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// Promise.any: takes an array of promises, returns first fulfilled promise (ES2021)
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));