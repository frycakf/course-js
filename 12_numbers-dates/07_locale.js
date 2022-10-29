const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // numeric|2-digit|long,
  year: 'numeric',
  weekday: 'long'
};

const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// ===============================

const num = 3546646.23;

// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
const options = {
  style: 'currency', // unit|percent|currency
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: true // true|false
}

console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('Czech:', new Intl.NumberFormat('cs-CZ', options).format(num));
console.log('Browser:', new Intl.NumberFormat(navigator.language, options).format(num));