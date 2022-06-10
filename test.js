'use strict';

//Spread Operator ...

// const arr = [7, 8, 9];
// console.log(arr);
// console.log(...arr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, // Passing object inside another object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3} !!`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copying an array
const mainMenuCopy = [...restaurant.mainMenu];

//Joining 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// const ingredients = [
//   prompt("Let's Make Pasta! Ingredient 1?"),
//   prompt("Let's Make Pasta! Ingredient 2?"),
//   prompt("Let's Make Pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

const newRestaurant = { foundeedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

console.log(restaurant);

const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

// Destructuring
// difference between spread and rest
const arr = [1, 2, 3, ...[4, 5, 6]]; // Spread operator becauase it is on the right hand side of the assignment operator
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5]; //REST pattern because it is on the left hand side of the assignment operator
console.log(a, b);
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Functions
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

restaurant.orderPizza('Mushrooms', 'Onions', 'Peppers');

//short circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(0 || '');
console.log(undefined || null);

// restaurant.numGuests = 23;
// const guess1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guess1);

const guess2 = restaurant.numGuests || 10;
console.log(guess2);

console.log('Jonas' && 23 && 'Apple' && null && 'orange');

//Nullish Coelescing operator

restaurant.numGuests = 0;
const guess1 = restaurant.numGuests ?? 10; // only null or undefined will work
console.log(guess1);

//Logical assignment operators
const rest1 = {
  name: 'Capri',
  age: 23,
};
const rest2 = {
  name: 'Don',
  age: 24,
  rollNo: 33,
};

rest1.rollNo ||= 10;
console.log(rest1);
rest2.rollNo ??= 20;
console.log(rest2);

//for of loop
const testMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(testMenu);
for (const item of testMenu) console.log(item);

//optional Chaining
console.log(restaurant.openingHours.thu);
console.log(restaurant.openingHours.fri.open);
console.log(restaurant.openingHours.mon?.open); //optional chaining

//Object keys and values
const properties = Object.keys(openingHours);
console.log(properties);

//sets
const ordersSet = new Set(['apple', 'apple', 'banana']);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.has('apple'));
console.log(ordersSet.size);

//Maps
const restMap = new Map();
restMap.set('name', 'Risotto bhavan');
restMap.set(1, 'Chennai, India');
console.log(restMap.set(2, 'Dublin, Ireland'));
