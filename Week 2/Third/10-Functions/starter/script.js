'use strict';

// Default parameteres in function

// const bookings = [];

// function createBooking(flightNum,
//     passengerNum =1,
//     price =12 + passengerNum){

//     // ES5 method
//     // passengerNum = passengerNum || 1;
//     // price = price || 1

//     const booking = {
//         flightNum,
//         passengerNum,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking)
// }
// // createBooking(7777)
// createBooking('HB23', 400);
// console.log(bookings);

// Defult parameters practice

// const plane = [];
// function airPlanes(emirates = 1, board = 1, executive = 2 + emirates) {
//   const details = {
//     emirates,
//     board,
//     executive,
//   };
//   console.log(details);
//   plane.push(details)
// }
// airPlanes(23, 2)

// How argument work
// const planeType = 'emirates';
// const traveler = {
//     name:'Juptain',
//     passportNum : 23567183,
//     from:'Nigeria',
//     to:'saudi'
// }

// function transport(type, passenger){
// Assigning to a proimitive value will create another variable to store the value
// type = 'board';
// Assigning to a reference type will create a shallow copy of the object
//     passenger.name = 'Jupiter mountain'
// }
// transport(planeType, traveler);
// console.log(traveler);
//

// Firstclass functions && (Higher order function)

// Higher order function

// function wordReplace(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }
// function uppperFirst(str) {
//   const [first, ...rest] = str.split(' ');
//   return [first.toUpperCase(), ...rest].join(' ');
// }

// function transformer(str, fun){
//   console.log(fun(str));
//   console.log(`Transformed by function: ${fun.name}`);

// }
// transformer("javaScript is an OOP", uppperFirst);
// transformer('javaScript is an OOP', wordReplace);

// Higher order function practice
// function that process an array
// function getAverage(avg) {
//   for (let dat of avg) {
//     return `${dat} has a character length of ${dat.length}`;
//   }
// }
// // console.log(getAverage(['Doctor', 'Nurse']));

// // function that convert a map into array
// const polo = new Map([
//   ['First', 'Monday'],
//   ['Second', 'Tuesday'],
//   ['Third', 'Wednesday'],
// ]);

// const program = new Map([
//   ['One', 'Python'],
//   ['Two', 'Javascript'],
//   ['Three', 'C++'],
// ]);

// function mapConverter(str) {
//   let poil = [...str];
//   return poil;
// }
// function endOpe(pol) {
//     let pola = mapConverter(pol)
//   let [A = 0, B = 0, C = 0] = pola;
//   for (let a = 0; a < A.length; a++) {
//     let po = [A[a]];
//     console.log(getAverage(po));

//   }

//   for (let a = 0; a < B.length; a++) {
//     let poo = [B[a]];
//     console.log(getAverage(poo));

//   }

//   for (let a = 0; a < C.length; a++) {
//     let pooo = [C[a]];
//     console.log(getAverage(pooo));

//   }
// }

// function funcConnector(map, second){
//     // let total = first(map);
//     // total = second(total);

//    let total = second(map);
// }
// funcConnector(polo, endOpe);
// funcConnector(program,  endOpe);

// return function

// function send(mes){
//     return function(message){
//         return function(price){
//             return console.log(`${mes} ${message} and the price is ${price}`);
//         }
//     }
// }
// send('polo is good')('Juptain')(2000);

// //
// Using arrow function to return a function
// const arr = greet => name =>price=> console.log(`${greet} ${name} ${price}`);
// arr('Hey')('Vscode')(2022)

// const arr = greet => {
//      return function (message) {
//        return function (price) {
//          return console.log(`${greet} ${message} and the price is ${price}`);
//        };
//      };
// }
// arr("Good morning")('Debtor zuri')(6799)

// const emirate = {
//     airline:'VIP express',
//     iatacode: 'VPE(e)',
//     bookings : [],
//     book(flightNum, name){
//         console.log(`${name} with flightnumber ${flightNum} booked a flight on airline ${this.airline} with the iatacode of ${this.iatacode}`);
//          this.bookings.push({
//            flight: `${this.iatacode} ${flightNum}`,
//            name,
//          });

//     },

// }
// const book = emirate.book;
// emirate.book(342, 'Juptain');
// emirate.book(342, 'Juptain');
// // console.log(emirate.bookings.length);

// const board = {
//   airline: 'Regular user',
//   iatacode: 'REGEXP(r)',
//   bookings: [],

// };
// const poll = [354, 'Kholid']
// book.call(board, 20045, 'Mountain')
// book.call(emirate, 20045, 'Mountain');
// book.apply(board, poll);
// book.call(board, ...poll);
// console.log(board.bookings);
// console.log(emirate.bookings);

// Trying destructuring
// const main = board.bookings;
// let [first, second, third] = main;
// // let [A, B] = Object.values(first)
// let {flight:A, name:B} = first
// console.log(first);
// console.log(A);

// Practicing call && Binding

// const car ={
//     name: 'Toyota camry',
//     brand:'Camry',
//       asset : [],
//     pricecalc(str){
//         this.price = str * 29000;
//        this.asset.push(this.price)
//     }

// }
// car.pricecalc(222);

// console.log(car.price);

// const book = car.pricecalc

// const car2={
//     name: 'Toyota camry venza',
//     brand:'Camry',
//       asset : [],
// }
// // appluy
// book.apply(car2, [3]);

// // call
// // book.call(car2, 3444);

// console.log(car.asset);
// console.log(car2.asset);

// const emirate = {
//   airline: 'VIP express',
//   iatacode: 'VPE(e)',
//   bookings: [],
//   book(flightNum, name) {
//     //console.log(
//       `${name} with flightnumber ${flightNum} booked a flight on airline ${this.airline} with the iatacode of ${this.iatacode}`
//  //   );
//     this.bookings.push({
//       flight: `${this.iatacode} ${flightNum}`,
//       name,
//     });
//   },
// };
// const book = emirate.book;
// // emirate.book(342, 'Juptain');
// // emirate.book(342, 'Juptain');
// // console.log(emirate.bookings.length);

// const board = {
//   airline: 'Regular user',
//   iatacode: 'REGEXP(r)',
//   bookings: [],
// };

// const bookb = book.bind(board);
// bookb(2333, 'Taofeek');

// const bookb2 = book.bind(board, 456);
// bookb2("Poland")
// bookb2('peeee');
// console.log(board.bookings);

// Binding with evenetlistener
// emirate.planes = 350;
// emirate.buyPlane = function(){
//     // console.log(this);
//     this.planes ++;
//     // console.log(this.planes);
// }
// const buy = emirate.buyPlane;
// const buy1 = buy.bind(emirate)
// In every handler function the this keyword points to the DOM element

//first
// document.querySelector(".buy").addEventListener("click", buy1)

// second

// document.querySelector('.buy').addEventListener('click',emirate.buyPlane.bind(emirate))

// Partial application

// const priceCalcdif = (old , present) => (present - old);
// const addDif = priceCalcdif.bind(null, 1300);
// console.log(addDif(2000));
// console.log(priceCalcdif(200, 450));

// function home(A){
//     return function(B){
//         return (A + B) *B
//     }
// }
// const land = home(23);
// console.log(land(234));

// Poll app
//Display result function
// function displayResults(...str) {
//   return console.log(...str);
// }
// function displayResults(str = 'array') {
//     if (str === 'array'){
//         return (str)
//     }else if (str === 'string'){
//         return (...str.join(', '))
//     }
//   return console.log(str);
// }
// displayResults("Homeland", 'street');

// console.log(displayResults(['ppp', 454]));
// const test = displayResults('Hello', 'ooo');
// console.log(...test);

// const poll = {
//   question: 'what is your favorite programming language',
//   options: ['0: python', '1 : python', '2:rust', '3: c++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const requestedQuestion = parseInt(
//       prompt(
//   `${this.question}\n${this.options.join("\n")}\n write your options here`
//       )
//       //   prompt(`
//       //        What is your favourite programming language?
//       //     0: JavaScript
//       //     1: Python
//       //     2: Rust
//       //     3: C++
//       //     (Write option number)
//       // `)
//     );
//     if (requestedQuestion <= 3) {
//       const App = this.answers[requestedQuestion]++;
//       //  console.log(App);
//       // console.log(poll.answers);
//       this.displayResults();
//     } else {
//       alert('Invalid poll');
//     }
//   },
//   displayResults(type = 'array'){
//     if (type === 'array'){
//         console.log(this.answers);
//     }else if (type === 'string'){
//         console.log(`poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };

// const base = poll.registerNewAnswer;
// document.querySelector('.poll').addEventListener('click', base.bind(poll));


// Immediately invoked function

// function expression
// (function () {
//   console.log('Immediately invoked function');
// })()
 


// Closures

// function mall(){
//    let chopStick = 1;
//     return function(){
//         chopStick ++;
//         console.log(chopStick);
//     }
// }
// const bitemore = mall();

// bitemore()
// bitemore();
// bitemore();

// Closure example 1
// let bus;

// function moor(){
//     const animal = 'Cat';
//     bus= function (){
//         console.log(animal + ' and Monkey are also an animal');

//     }
// }


// function home(){
//     const house = 'Alase';
//     bus = function(){
//         console.log(house + ' is a small world in moniya ');
//     }
// }
// moor();
// bus();
// console.dir(bus)
// home();
// bus()

// Closure example 2 (by me)
// const price = Number(prompt('what is the price'));
// const unit = Number(prompt('what is the total quantity of the products'));
// const when = Number(prompt('specify the time for the calculations'));
// const productName = prompt('what is the name of the product');
// function calcPrice(price, unit , name, when){
//     let cost = price * unit;

//     setTimeout(function(){
//         console.log(`${unit} ${name} with price ${price} each is about to be calculated in ${when*1000} seconds, kindly wait`);
//         console.log(`The total cost for ${unit} ${name} is ${cost}`);
//     }, when*1000)

// }
// calcPrice(price, unit, productName, when);

// Closure coding challenge

// (function(){
//     let header =  document.querySelector("h1");
//     header.style.color = 'red';

//     document.querySelector("body").addEventListener("click", function(){
//         header.style.color = 'blue'
  
//     })
// } ) ()

