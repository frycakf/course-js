'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'sat', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullist
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 'Anonymous';
// rest2.owner &&= 'Anonymous';

// console.log(rest1);
// console.log(rest2);

// console.log('----------- OR -----------');

// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Filip');
// console.log('' || 'Filip');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----------- AND -----------');
// console.log(0 && 'Filip');
// console.log(7 && 'Filip');
// console.log('Hello' && 23 && null && 'Filip');

// if (restaurant.orderPasta) {
//   restaurant.orderPasta('mushrooms', 'spinach');
// }

// restaurant.orderPasta &&
//   restaurant.orderPasta('mushrooms', 'spinach', 'garlic');

// // SPREDAD, because on RIGHT of =
// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// const [pizza, risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherfood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = +numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(2, 3, 5, 6, 2, 5);
// add(2, 3, 6, 2, 4, 6, 2, 7);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // const cars = ['Audi', 'Skoda', 'Mercedes'];
// // const bikes = ['Kawasaki', 'Honda', 'Harley'];
// // const vehicles = [cars, bikes];
// // console.log(...vehicles);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// const starterMenuCopy = [...restaurant.starterMenu];

// // Join 2 arrays
// const menu = [...mainMenuCopy, ...starterMenuCopy];
// console.log(menu);

// // Iterables
// const str = 'Filip';
// const letters = [...str];
// console.log(...letters);

// // const ingredients = [
// //   prompt('Lets make pasta! Ingredient 1?'),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];

// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1996, ...restaurant, founder: 'Thomasso' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name, restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// [main, secondary] = [secondary, main];

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);


// ==============================================================================================
// ============================== OPTIONAL CHAINING =============================================

// // This is quite messy code
// if(restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // This is the same (checks if .open exists) → this is called optional chaining
// // check if .mon exists
// console.log(restaurant.openingHours.mon?.open);

// // check if .openinigHours exists
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'sat', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Works also with METHODS
// // this method DOES exists
// console.log(restaurant.order?.(0,1) ?? 'Method does not exists');

// // this method DOES NOT exists
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exists');

// // Works also with ARRAYS
// const users = [{name: 'Frycak', email: 'hello@frycak.cz'}];
// console.log(users[0]?.name ?? 'User array empty');


// ==============================================================================================
// ============================== LOOPING OBJECTS ===============================================

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for(const [day, {open, close}] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// ==============================================================================================
// ============================== DATA STRUCTURES: SETS =========================================

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);

// console.log(new Set());
// console.log(ordersSet.size); // zjisti velikost setu

// console.log(ordersSet.has('Pizza')); // zjisti, zda set obsahuje xxx
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread'); // pridani elementu do setu
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersSet.delete('Risotto'); // odstraneni elementu ze setu
// console.log(ordersSet);

// // Iterovani setu
// for (const order of ordersSet) {
//   console.log(order);
// }

// // Prakticky priklad vyuziti - spocitani jedinecnych hodnot
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// //const staffUnique = new Set(staff); // turning array into set (unique values)
// const staffUnique = [...new Set(staff)]; // turning array into array via set (unique values)
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// // Kolik pismen mam ve jmene
// const name = new Set('Filip Frycak');
// console.log(name.size);

// ordersSet.clear(); // odstraneni celeho setu
// console.log(ordersSet);


// ==============================================================================================
// ============================== DATA STRUCTURES: MAPS =========================================

// Metody:
// - set()
// - get()
// - has()

// const rest = new Map();
// rest.set('name', 'Classico Intaliano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisabon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']) // set() can be chained
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name')); // get map value
// console.log(rest.get(true));

// // Prakticky priklad - having booleans as map keys
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // Metoda has() - vraci bool
// console.log(rest);
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// console.log(rest.size); // get size
// // rest.clear(); // delete map elemets

// // this will not work (calling array with same definition)
// rest.set([1,2], 'Test')
// console.log(rest);
// console.log(rest.get([1,2]));

// // ...we have to do that this way:
// const arr = [1,2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// // DOM
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
