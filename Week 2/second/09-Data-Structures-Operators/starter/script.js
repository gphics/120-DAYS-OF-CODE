'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (start, end) {
    return [this.starterMenu[start], this.mainMenu[end]];
  },
  orderPazta: function (one, two, three) {
    console.log(
      `Here is your supeerflous pazta with ${one} , ${two}, and  ${three}`
    );
  },
  openingHours: {
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
  },
};

//Destructuring Objects
// The variable name must be the same as the property of the object or ?
// const { categories, name, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// Python dictionary method
// console.log('___-----____');
// const { categories: cat, name:Name, openingHours:OH } = restaurant;
// console.log(Name, cat, OH);

// Default values
// console.log('___-----____-----____');
// const {home = {}, openingHours:timeOpen = {}} = restaurant
// console.log(home, timeOpen);
// Mutating values
// let a = 20;
// let b = 30;
// const tot = {a:['world', 2],
//       b:20000,
//       c:'pot',

// };

// ({ a, b } = tot);
// console.log(a, b);
// const tot = { a: 78, b: 90, c: 900 };

// Nested object
// const {fri:{open, close}} = timeOpen;
// console.log(open, close);

// Practicing object destructuring
// let pot='Awo';
// let size="100vh"
// const food = {
//   Amala:{
//     A: 'Water',
//     B: 'Amala',
//     C:{
//       pot: 'stainless',
//       size: '100vw'
//     }
//   },
//     Iyan:{
//     A: 'Water',
//     B: 'Yam'
//   },
//     Semo:{
//     A: 'Water',
//     B: 'Semo'
//   }
// }

// const {Amala:First, Iyan:Second, Semo:Third} = food;
// let {A, B,} = First;
// console.log(A,B);
// const {C:{pot:PO, size:OP}} = First;
// const {C} = First;
// ({pot,size} =C)
// console.log(pot, size);

// let { A:A2, B:B2 } = Second;
// console.log(A2, B2);

// let { A:A3, B:B3 } = Third;
// console.log(A3, B3);
// console.log(First, Second, Third);
// Destructuring Arrays

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [first, second] = restaurant.order(2, 0);
// console.log(first, second);
//Nested array
// const nested = [2, 5, 6, ['ant', 'pig']];
// const [A, , , B] = nested;
// console.log(A, B);
// const [A, , , [B,C]] = nested;
// console.log(A, B,C);

/// Default values

// const [a = 1, b , c = 1] = [10, 90]
// console.log(a, b, c);

// Practice destructuring

// const house = ['Bungalow', 'Duplex', 'Flat', [1000, 2000, 3000]];
// const [, A , , [B,C,D]] = house;
// console.log(A,B,C,D);

// spreading (Expanding array)
// Concatenating arrays
// const arr = [2, 4, 5];
// const newArr = [0, 1, ...arr];
// console.log(newArr);
// // Displaying an array elements individually
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Amala', 'Egbo'];
// console.log(newMenu);

// Spreading practice
// console.log(`__--__--__--___---__`);
//Copying arrays
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
//Joing two arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// String Spreading
// const mine = 'Juptain';
// spread into array
// const me = [...mine];
// console.log(me);
// console.log(...mine);

//using for loop to work like spread on a string
// for (let a = 0; a <mine.length; a++){
//   const pig = mine[a];
//   console.log(pig);
// }
// console.log('hello');
// let b =0;
// while(b<=(mine.length - 1)){
//   console.log(mine[b]);
//   b++;
// }
//Practice
// const ingredients = [
//   prompt('Ingredient one ......'),
//   prompt('Ingredient two ......'),
//   prompt('Ingredient three ......'),
// ];

// console.log(ingredients);
// restaurant.orderPazta(...ingredients)

// Spreading on object

// const newRes = {...restaurant,
//     founder:'Juptain'
// }
// newRes.name="Risnaples"
// console.log(newRes);
// console.log("___-----____");
// console.log(restaurant);

//Final Practice of destructuring

// Array
// const original = [ 1, 2, 4, 5];
// const [A, , B, C] = original
// console.log(A, B, C);

// //Nested array
// const newOri= ['Ant', 'spider', [1,3,4]];
// let [D, , [E, F, G]] = newOri;
// F ='POT'
// console.log(D , E , F , G);

// console.log("__--____-----____");
// //Object

// const First = {
//   nickName:'Juptain',
//   birthYear: 2003,
//   calcAge: function(){
//     this.age = 2022 - this.birthYear;
//     return this.age
//   },
//   shoe:{
//     names:['Slippers', 'heels', 'sandals'],
//     size:[4,5,6,6]
//   }
// }
// First.calcAge()
// const {nickName:nick, birthYear:year, age, shoe} = First;

// console.log(nick, age);
// const {names:[one, two, three]} = shoe;
// const {names:Name, size} =shoe
// console.log(one , two, three);

// // spreading
// const newlyArr = [...Name]
// const newlyArr2 =['Boolean', 'sheep', ...newlyArr]
// console.log(newlyArr2);

// const friend ={
//   ...First,
//   post: true
// }
// friend.nickName = "Gphics"
// friend.calcAge()

// console.log(friend.nickName);
// console.log(friend.post);
// console.log(First.post);

// // Using spread to pass a parameter
// function loin(A, B, C){
//   return (A+B)/C;
// }
// const go = [2,4,8]
// console.log(loin(...go));

// Rest pattern

// const rome = [1,2,3,4,5];
// const [a, , b, ...others] = rome;
// console.log(a, b, others);
// const [a, ...tope] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(a, tope);

// Rest pattern in object

// const {sat, ...weeks} = restaurant.openingHours;
// console.log(weeks);

// // Rest parameter

// function press(...num){
//   let sum = 0;
//   for (let i = 0; i <num.length; i++){
//     sum +=num[i];
//   ;
//   }
//     console.log(sum);
// }
// press(4,5,9,8,9);
// const blue = [90, 78, 9, 6];
// press(...blue);
// console.log("___-----____");
// //Rest practice
// const [an, ...all] = [1,2,3,4,5, ...blue];
// console.log(all);

//Short circuiting

// console.log(2 || 6);
// console.log(restaurant.llo || 20);

// console.log('-----AND-----');
// console.log( 10 && 0);
// const polo = {
//   place: function (bat) {
//     return bat;
//   },
// };
// console.log(polo.place && polo.place("water"));

// console.log('----OR-----');
// console.log(0 || 'Print');

// console.log('----AND-----');
// console.log('Print' && null);

//Nullish coalacing operator

// let come = null;
// console.log(come ?? 10);

//CODING CHALLEGE

// Object

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Creating the player array

const [players1, players2] = game.players;

// Creating goalkeeper
const [GK1, ...fieldPlayer1] = players1;
const [GK2, ...fieldPlayer2] = players2;

// Creating allplayers arrary
const allplayers = [...players1, ...players2];

// Player substitute
const substitute = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...substitute];

// Odds in the game
const {
  odds: { team1, x: draw, team2 },
} = game;

// Winner
team1 < team2 && console.log('Team 1 is more likely to win');
team1 < team2 || console.log('Team 2 is more likely to win');
// console.log(
//   team1 > team2 || ` you (${game.team1}) wins and (${game.team2}) lose`
// );

// Function printGoals

// Getting the players that scored
const [A, B, C, D] = game.scored;
// const 
// console.log(typeof A);

//Declaring the function

function printGoals(...play) {
    console.log(`${play} scored ${play.length}`);
  
}
printGoals(...game.scored);
