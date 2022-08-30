'use strict';

// const calcAge = birthYear =>{
//     const age = 2037 - birthYear;
//     const firstName="Mountain"
//     function just(){
//         const output = `I am ${firstName} I am ${age} and born on ${birthYear}`
//     console.log(output);

//     if(birthYear >= 1981 && birthYear<=1996){
//         var milenial =true;
//         const str = `oh, and you are a milenial ${firstName}`
//         console.log(str);
//     }
//     console.log(milenial);
//     }
//     just();
// }

// const firstName = 'Juptain';
// calcAge(1990)
// console.log(me);
// console.log(job);
// console.log(year);

// var me='Juptain';
// const year = 2003;
// let job = 'Programing'


// // Hoisting func
// console.log(addDec(2,5));
// console.log(addarr(2, 5));
// console.log(addExp(2, 5));
// function addDec(a, b){
//     return a + b;
// }


// const addExp = function addDec(a, b) {
//   return a + b;
// };

// var addarr = (a, b) => {
//     return a + b
// }
// var numPro = 10;
// // Problem with hoisting
// if(!numPro) delshop()


// function delshop(){
//     console.log('All products deleted');
// }
// console.log(this)

// const calcAge = function(bir){
//     console.log(2037 - bir);
//     console.log(this);
// }
//  calcAge(2222)

// const Arr = bt =>{
//     console.log(2037 - bt)
//     console.log(this)
// }
// Arr(3333)
// console.log('___------_____');
// const Juptain = {
//     year:1990,
//     calcAge :function(){
//     console.log(2037 - this.year);
//     // const self = this;
    // const check = function(){
    //     if (self.year >= 2000){
    //         console.log ("Yeah, you are the real deal")
    //     }else{
    //         console.log("Invalid year, get lost");
    //     }
    // };
//         const check = () => {
//           if (this.year >= 2000) {
//             console.log('Yeah, you are the real deal');
//           } else {
//             console.log('Invalid year, get lost');
//           }
//         };
//     check()
// }
// }
// Juptain.calcAge();

// const pot = {
//     year: 1000
// }
// pot.Age= Juptain.calcAge;
// pot.Age()


// let age =30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'juptain',
//     age :30
// }

// const friend = me
// friend.age = 27;

// console.log('friend', friend );
// console.log('Me', me);


// Copying object

const school ={
    age:12,
    students:2000,
    name: 'Futur',
    teacher:{
        name: ['Chris', 'Juptain'],
        numbers: 23
    }
}
//Shallow copy

const school2 = Object.assign({}, school);
school2.name = 'Zuri';
school2.teacher.name.push ('Wonder')

console.log('School 1', school);
console.log('School 2', school2);