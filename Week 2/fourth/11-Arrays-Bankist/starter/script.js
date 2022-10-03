'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Array methods

// splice method
// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// slice for copying array
// let est = arr.slice()
// console.log(est);
// est[0] = 'Pot'
// console.log(est);
// console.log(arr);

// Splice method
// console.log(arr.splice(2));
// console.log(arr.splice(1,2,'just', 'pot',));
// console.log(arr.length);

// Reverse
// let arr2 = [2,4,5,7,1]
// console.log(arr.reverse());
// console.log(arr);

// // Concat

// const product = arr.concat(arr2)
// const [A, ...polo] = product;
// console.log(A);


// Looping over an array
// for of loop
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [a, move] of movements.entries()){
//   if (move > 0) {
//     console.log(`Move ${a} : You deposited ${move}`);
//   } else {
//     console.log(`Move ${a} You withdrew ${Math.abs(move)}`);
//   }

// }
// console.log('For each method \n \n');

// // for each
// movements.forEach(function(move, num, obj){
//   if (move > 0) {
//     console.log(`Move ${num} : You deposited ${move} into the bankist bank ${obj}`);
//   } else {
//     console.log(`Move ${num} : You withdrew ${Math.abs(move)} fromthe bankist bank ${obj}`);
//   }

// })

// Foreach in map  and set

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key} : ${value} ` );

})

// for each on map
 const city = new Set ([
  'Alase', 'Moniya', 'Osogbo', 'Oyo'
 ])

 console.log(city);

 city.forEach(function (value, _, set) {
    console.log(`${value} `);
 });