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
  kit(A, B) {
    return A + B;
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

// const prop = Object.keys(openingHours);
// console.log(prop);
// Optional chaining
// on Objects
// console.log(restaurant.openingHours.sat ?. open);
// const days = ['mon', 'tue', 'thu', 'fri', 'wed', 'sun', 'sat'];

// for of operator
// for (const day of days){
//   const opened = restaurant.openingHours[day]?.open ?? 'unavailable';
//   console.log(`We are always openned on ${day} at ${opened}`);
// }

// On function
// console.log(restaurant.kit?.(2, 4) ?? 'Not a function');

// oN FUNCTION
// const shop = [{name: 'pawpaw'}, {size: 122}];
// console.log(shop[0]?.name ?? 'Not available');
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
//
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// Creating the player array

// const [players1, players2] = game.players;

// // Creating goalkeeper
// const [GK1, ...fieldPlayer1] = players1;
// const [GK2, ...fieldPlayer2] = players2;

// Creating allplayers arrary
// const allplayers = [...players1, ...players2];

// Player substitute
// const substitute = ['Thiago', 'Coutinho', 'Perisic'];
// const players1Final = [...players1, ...substitute];

// Odds in the game
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// Winner
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 < team2 || console.log('Team 2 is more likely to win');
// console.log(
//   team1 > team2 || ` you (${game.team1}) wins and (${game.team2}) lose`
// );

// Function printGoals

// Getting the players that scored
// const [A, B, C, D] = game.scored;
// const
// console.log(typeof A);

//Declaring the function

// function printGoals(...play) {
//     console.log(`${play} scored ${play.length}`);

// }
// printGoals(...game.scored);

// for of loop
// const men = ['king', 'queen', 'prince', 'princess']

//for (const blue of men ) console.log(blue);
// To get the index and its element
// for (const [a, b] of men.entries()){
//   console.log(`${a + 1} : ${b}`);
// }

// Enhanced object literals

// const home = {
//   homeName : 'Paris jamen',
//   homeNumber: 222
// }

// const city ={
//   cityName : 'Ibadan',
//   cityNumber: 111,
//   // First enhanced ppties
//   list : home,

//   // or
//   home,
//   putMe(A, B){
//     return A + B;
//   }

// }
// console.log(city.putMe(12 , 55));
// console.log(city);
// class homeo  {
//   home = 233
// }
// console.log(typeof homeo);

//Practicing optional chailinig

// on object
// const months ={
//   name:{
//     A: 'January',
//     B: 'February',
//     C: 'March',
//     D: 'April'
//   },
//   number: 12,
//   ordering(One, Two){
//     return One + Two
//   }
// };
//  console.log(months.name ?.Ao ?? 'Absent');

//  // On function
//  console.log(months.ordering ?.(2, 4) ?? 'Absent 222');

/// On arrays
// const arr = [{pot:1, size:233}]
// console.log(arr [0] ?. size ?? "Absent 3333");

// Looping object
// const school = {
//   names : ['Udemy', 'Futur']
// }
// // const pti = Object.keys(school)
// // console.log(...pti);
// for (const sch of Object.values(school)){
//   console.log(...sch);
// }

//Looping over an object
//   const openingHours= {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };

//   const enter = Object.entries(openingHours);
// for (const [key, {open, close}] of enter){
//   console.log(`On ${key} we open at ${open} and close by ${close}`);
// }
//   // Looping base on keys
// const prop = Object.keys(openingHours);
// let openDays = `We are open for ${prop.length} days `;

// for (const when of prop){
//   openDays += `${when}, `
// }
// console.log(openDays);

// // Looping base on values
// const valo =  Object.values(openingHours);
// console.log(valo);

// const men = [1, 4, 5, 7]
// for (const [D, C] of men.entries()){
//   console.log((D + 1),':' ,C);
// }

/// Challenge 2

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

// Goal scoreres and goal number
// let ga = game.scored
// for (let a = 0; a < ga.length ; a++){
//   console.log(`Goal ${a + 1}: ${ga[a]}`);
// }

// //Average odd
// // First method
// let { team1, x, team2 } = game.odds;
// let ori = [team1, x, team2];
// let sum = 0;
// let sum1 = 0;
// let valueLength = 0;
// for (let a = 0; a < ori.length; a++) {
//   sum1 += ori[a] / ori.length;
// }
// console.log('___ FIRST METHOD___');
// console.log(sum1);

// // Second method
// for (const [key, value] of Object.entries(game.odds)) {
//   sum += value;

//   valueLength += [value].length;
// }
// console.log('___ SECOND METHOD___');
// sum /= valueLength;
// console.log(sum);

// //Printing the three odds
// // let A =
// // for (const [key, value] of Object.entries(game.odds)){
// //   console.log(`Odd of victory ${game.team1}`);
// // }
// const [A, B, C] = Object.values(game.odds);

// console.log(`Odd of victory ${game.team1}: ${A}`);
// console.log(`Odd of draw: ${B}`);
// console.log(`Odd of victory ${game.team2}: ${C}`);

// SET

// const firstSet = new Set([
//   'Monday',
//   'Tuesday',
//   'Monday',
//   'Wednesday',
//   'Tuesday'
// ])
// firstSet.add("January")
// firstSet.delete('January');
// console.log(firstSet.size);
// console.log(firstSet.has("Monday"));
// // firstSet.clear()
// console.log(firstSet);
// for(const order of firstSet ) console.log(order);

// SET EXAMPLE
// const staff = ['Manager', 'Waiter', 'Cleaner', 'Waiter', 'Cleaner'];
// const orderStaff = [...new Set(staff)];
// console.log(orderStaff);

// MAP

// const lifeMap = new Map ();
// lifeMap.set("Html", '2 days').set(120, 'Days of Code')
// lifeMap.set(true, 'I will succed');
// lifeMap.set('open', 12).set('close', 15)
// const time = 14
// console.log(time > lifeMap.get("open") && time < lifeMap.get("close"));
// console.log(lifeMap.get(true))
// lifeMap.delete("Html")
// console.log(lifeMap.has('Html'));
// // lifeMap.clear()
// console.log(lifeMap.size);

// console.log('--^^^^---____^^^^_____');
// lifeMap.set(document.querySelector("h1"), 'Heading');
// console.log(lifeMap);

// Map iteration

// const place =([
//   ['question', 'where do you live ?'],
//   ['answer', 'I live in sapele']
// ])
// console.log(place [0]);;

// // Convert an object to map
// const newGame  = new Map (Object.entries(game))
// console.log(newGame);

// Map Quiz game

// const Game = new Map([
//   ['question', 'what is the best programming language ?'],
//   [1, 'Python'],
//   [2, 'JavaScript'],
//   [3, 'Java'],
//   [4, 'Java'],

//   [true, 'You got it right 🤑'],
//   [false, 'You are wrong '],
// ]);
// // Iterating through the map
// console.log(Game.get('question'));
// for (const [key, value] of Game){
//   if (typeof key === 'number') console.log(`Option ${key} : ${value}`);
// }

// const answer = Number(prompt("Pick an option"))
// console.log( Game.get(answer <2));

// CODING CHALLENGE

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// Transforming a map to an array
// Splitting the operand
// let events = [ ...gameEvents];
// events = [...new Set(events)]
// events = [...events]
// Doing it at a go
// let events1 = [...new Set([...gameEvents.values()])]
// let events = [...new Set([...gameEvents])];
// console.log(...events1);

//Deleting array with key 64
// let back = new Map([...events])
// back.delete(64)
// back = [...back]

// console.log(back);

// Iterating over a map
// back = new Map([...back])
// Getting the average
// console.log(`An event happen in every ${90/back.size} minutes`);
// console.log(back);

// for (const [key, value] of back){
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   // console.log(`[${half}] ${key} : ${value}`);

// }

// Working with string

// const airLine = 'Emirate of Kwate';
// const plane = 'F1419';
// // console.log(airLine.lastIndexOf('t'));
// console.log(airLine.toLowerCase());
// let passengers = 'JUPtaiN'
// let passenger = passengers[0].toUpperCase() + passengers.slice(1).toLocaleLowerCase()
// console.log(passenger);

// function cp(dad){
//   let pur = dad[0].toUpperCase() + dad.slice(1).toLocaleLowerCase()
//   return pur
// }
// console.log(cp(passengers));

// comparing email
// const email = 'jupt@gmail.com';
// let loginEmail = ' JupT@gmail.com ';
// loginEmail = loginEmail.toLocaleLowerCase().trim()
// console.log(loginEmail);

// replaicing
// const priceGB = '290,548N';
// const priceUS = priceGB.replace("N", "$").replace("," , '.');
// console.log(priceUS);
// let announcement = 'Everybody kinda listen with your kinda attention';
// //Using replacAll
// console.log(announcement.replaceAll('kinda', 'kindly'));

// replacing more than one word in a sentenc using regular expression
// console.log(announcement.replace(/kinda/g, 'kindly'));

// String methods that return a boolean

//Includes
// const car = 'Toyota camrye';
// console.log(car.includes("o"));

// // startswith
// console.log(car.startsWith('T'));
// // console.log(passenger.toLocaleUpperCase());
// console.log(car.startsWith("Toy") && car.endsWith("mry") && car.includes("o") ? 'Yeah, confirmed' : "fuck off")

// Practice exercise

// function check(items){
//   let baggage = items.toLowerCase();
//   if (baggage.includes('explosives')){
//     console.log('You are not allowed , security @!!');
//   }else{
//     console.log('You are welcome')
//   }

// }
// check("Got some grade A gun")
// check("Got some explosives with cocain")
// Slice method
// console.log(airLine.slice(5, 7));
// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
// console.log(airLine.slice(1, -1));

// Practice
// function checkMiddle(seat){
//   let middle = seat.slice(-1);
//   middle = middle === 'B' || middle === 'C' ? 'Middle' : 'Not middle'
//   return console.log(middle);

// }
// checkMiddle('22C')

// const dust = 'program'
// console.log(dust.indexOf('p'));

//Split
// console.log('I/am/juptain'.split("/"));
// const [first, second] = 'Jupiter moutain'.split(" ");
// const newName = ['Mr.', first , second].join(" ")
// console.log(newName);

// // Paddding
// const message = 'go to gate 23';
// console.log(message.padEnd(20, 'I am here'));

// Credit card mask function

// function maskCard(cardNumber){
//   let card = cardNumber + ''
//   card = card.slice(-4).padStart(card.length, '*')
//   return console.log(card);
// }

// maskCard([2333, 4564, 7883])

// const pot = ['A', 'B', 'C'].join(" ")
// console.log(pot);

// Repeat
// console.log('Hello Juptain '.repeat(2));
// function carEcho(num){
//   console.log(`There are ${num} cars in the garage ${'🚘'.repeat(num)}`);
// }
// carEcho(7)

// Challenge 4


// function convert(word){
//   let wrap = word.split('_');
//   let [A, B] = wrap;
//   A = A[0].toUpperCase() + A.slice(1).toLowerCase().trim();
//   B = B[0].toUpperCase() + B.slice(1).toLowerCase().trim();
//   wrap = A+B
//   console.log(wrap);
// }
// convert('post_office')
// convert('pot_cAAse')
// convert("pot_case")

// const btn = document.querySelector('button');
// let oppo = '';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   const areaText = document.querySelector('textarea').value;
//   const rows = areaText.split('\n');
//   // console.log(rows);
//   for (let row of rows) {
//     let [first, second] = row.toLowerCase().trim().split('_');
//     console.log(first, second);
// //     first = first[0].toUpperCase() + first.slice(1);
// //     second = second[0].toUpperCase() + second.slice(1);
// //     let output = first + second
// //     oppo = output;
// //     console.log(output);

//   }
// });

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;



// Text sample

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// Accessing the DOM


// Escape variable
//  let out = '';

// btn.addEventListener("click", function(){
//   const text = document.querySelector('textarea').value;
//   let out = text.split('\n');
//   // console.log(out);
//    for (let our of out ){
//     let [first, second] = our.toLocaleLowerCase().trim().split("_");
//     first = first[0].toLocaleUpperCase() + first.slice(1) + second[0].toLocaleUpperCase() + second.slice(1) 
//     console.log(first);
//   //   let [first,second] = our;
//   //   console.log(first, second);
//    }
  
// })


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// Text sample
// // underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

btn.addEventListener("click", function(){
  const  text = document.querySelector("textarea").value;
  let value = text.split('\n')
  // let value = text.includes("_") ? text.split('_') : text
  for (let val of value){
    let [A, B] = val.toLocaleLowerCase().trim().split('_')
    A = A[0].toLocaleUpperCase() + A.slice(1) + B[0].toLocaleUpperCase() + B.slice(1) 
    console.log(A); 
  }
})