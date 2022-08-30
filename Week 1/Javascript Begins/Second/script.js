// 'use strict';

// let can = false;
// const cant = true;

// if (cant) can = true;
// if (can) console.log("Hello world");


//Functions
// function logger(){
//     C = console.log("Just a place")
//     return C

// }
// //Calling / running / invoking
// D = logger();

// function king(queen, staff){
//     queen ++;
//     staff ++;
//     console.log(queen, staff);
//     const chief = `The king have ${queen} queens and ${staff} staffs`
//     return chief

// }
// const A = king(2,4)  
// console.log(A)n 

// const B = king(12, 45)
// console.log(B)
// Number('pot')

//Birth calculator
// function declarartion
// console.log(Year(1999))

// function Year(birthYear){
//     return 2022-birthYear;
// }
// A = parseInt(prompt("your birth year ..."))


//Anonymous function  / function expression

// let clo = function(dy){
//     return 2022 - dy;
// }
// clo = clo(2334);
// console.log(clo)

//Arrow function

// let Age2 = by => 2022 - by 
// Age2 = Age2(1333, 12);
// console.log(Age2)

// //Retirement age calc

// const retirementAge = (birthYear, firtsName )=>{
//     const age = 2022 - birthYear;
//     const requiredRetirementAge = 65 - age;
//     return `${firtsName} retires in the next ${requiredRetirementAge} years`;
// }

// console.log(retirementAge(1980, 'Jupatin'))
// console.log(retirementAge(1975, 'Mountain'))


//Function declaration
// function calcA(A, B){
//     return (A+B) / B;
// }
// console.log(calcA(2,8))

// function expression
// const  calcB = function (A, B){
//     return (A+B) / B;

// }
// console.log(calcA(5,8))



// Arrow function

// const calcC = (A, B) => (A+B) / B;
// console.log(calcA(2,8))


// Tree Demolishion company

// function company(Orange, Mango){
//     const orangepiecies = TreeCutter(Orange);
//     const mangopiecies = TreeCutter(Mango);
//     return `Demolishion company demolished ${orangepiecies} Oranage trees and ${mangopiecies} mango trees`


// }

// function TreeCutter(tree){
//     const totaltreePiecies = MachineUsed(tree);
//     return totaltreePiecies;

// // }

// function MachineUsed(employedmachine){
//     return employedmachine *2;

// }

// console.log( company(2, 4))

// console.log(2900 + 800 )


//Function coding challenge

//First task
// const averageCalculator = (A, B,C) =>{
//     return (A + B + C) /3;
// }
// //First three round
// const dolphinsAverage= averageCalculator(44, 23, 71);
// const koalasAverage = averageCalculator(65, 54, 49);

// function checkers(first, second){
//     if(first >= (second*2)){
//         console.log(`Dolphins wins (${dolphinsAverage} vs. ${koalasAverage})`)
//     }else if(second >= (first*2)){
//         console.log(`Koalas wins (${koalasAverage} vs. ${dolphinsAverage} )`)
//     }else{
//         console.log("No team wins !")
//     }


// }
// checkers(dolphinsAverage, koalasAverage)

//First three round
// const dolphinsAverage2= averageCalculator(85, 54, 41);
// const koalasAverage2 = averageCalculator(23, 34, 27);
// console.log ("This is the second test ")

// function checkers(first, second){
//     if(first >= (second*2)){
//         console.log(`Dolphins wins (${dolphinsAverage2} vs. ${koalasAverage2})`)
//     }else if(second >= (first*2)){
//         console.log(`Koalas wins (${koalasAverage2} vs. ${dolphinsAverage2} )`)
//     }else{
//         console.log("No team wins !")
//     }


// }

// checkers(dolphinsAverage2, koalasAverage2)


// Array
// const friends = ['Muhiz', 234, 'Python', 'Django'];
// console.log(friends[0]);
// console.log(friends [friends.length-1])
// friends [0] = 'London'
// console.log(friends)
// const aboutMe =['programming', 'Jupatin', friends]
// console.log(aboutMe )
// console.log(aboutMe.length)
// OR;

//const new_friends = new Array("Lucky", 'london')
// console.log( new_friends )

//Array methods;
// const fruit = ['apple', 'watermelon'];
// fruit.push("pawpaw");
// fruit.unshift("mango")
// fruit.pop()
// fruit.shift()
// console.log(fruit.indexOf('mango'));
// console.log(fruit.includes('ango'))
// console.log(fruit)

// if (fruit.includes("pawpaw")){
//     console.log("yes")
// }

// coding challenge
// Array tip calculator

// const tipCalc =text =>{
//     if (text >= 50 && text <=300){
//         A = (15*text) / 100;
//         return A
//     }else{
//         B =20;
//         return B
//     }

// }
// const bill = [125, 555, 44];
// const tip = [tipCalc(bill[0]), tipCalc(bill[1]), tipCalc(bill[2])]
// console.log(bill);
// console.log(tip);
// const total = [(bill[0] + tip[0]), (bill[1] + tip[1]), (bill[2] + tip[2])]
// console.log(total)


//Object
// Object literal method
// const june = {
//     nickname : 'jupatin',
//     age : 20,
//     job : 'programmer',

// }
// june.location = 'portugal';
// june['handle'] = 'slack'
// const rec = prompt("Choose job, age, nickname")
// if (june[rec]){
//     console.log(june[rec])
// }else{
//     console.log("Nonsennhf")
// }

// Dot notatioN
// console.log(june.age);
// console.log(june['age']);

// const A = 'name';
// console.log(june['nick' + A])

// const checkers={
//     name:'Juptain',
//     friends : ['Python', 'Django', 'JavaScript'],
//     first : 'has',
//     second: 'friends',
//     third : 'and his best friend is',
 
// }
// console.log(checkers.name +' ' + checkers.first + ' ' + checkers.friends.length + ' ' + checkers.second + ' ' + checkers.third + ' ' + checkers.friends[0])


// Object method

// const checkers={
//         name:'Juptain',
//         friends : ['Python', 'Django', 'JavaScript'],
//         first : 'has',
//         second: 'friends',
//         third : 'and his best friend is',
//         hasGun : true,
//         age: 1999,

        // calcAge: function(gun){
        //     return 2090 - gun;
        // }
        // calcAge: function(){
        //     return 2090 - this.age;
        // }
    //     calcAge: function(){
    //         this.age = 2022 - this.age;
    //         return this.age;
    //     }
     
    // } 
    // // const A = checkers.calcAge(checkers.age);
    // const A = checkers.calcAge();
    //  console.log(checkers.age);
    //  console.log(A)

// const Summer = {
//     name: 'juptain',
//     birthYear : 1990,
//     hasDriverLicense : false,

//     // CalcAge : function (){

//     //     return 2022 - this. birthYear;
//     // }
//     calcAge: function (){
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     checkPermit: function(){
//         if(this.hasDriverLicense) {
//             return 'he has permission to drive';
//         }else{
//             return 'he doesent have permission to drive'
//         }
//     },

// }
// Summer.calcAge();
// Summer.checkPermit();
// //  console.log(Summer.calcAge());
// //  console.log(Summer.age);
// // console.log(Summer.checkPermit())

// console.log(`${Summer.name} is a ${Summer.age} years old ${Summer.job = 'programer'} and ${Summer.checkPermit()}`)


// Challenge : Class BMI calculator

// const mark = {
//     fullName : 'Mark Miller',
//     mass : 78 ,
//     height: 1.69,

//     calcBMI: function(){
//         this.BMI = this.mass / (this.height*this.height);
//         return this.BMI;
//     }

// }
// mark.calcBMI();
// const john = {
//     fullName : 'John Smith',
//     mass : 92 ,
//     height: 1.95,

//     calcBMI: function(){
//         this.BMI = this.mass / (this.height*this.height);
//         return this.BMI;
//     }

// }
// john.calcBMI();

// const display = {
//     checkers : function(A, B) {
//         if (A > B){
//             const out = `${mark.fullName} BMI (${mark.BMI}) is higher than ${john.fullName} BMI (${john.BMI})`;
//             return out;
//         } else{
//             const ind = `${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI})`;
//             return ind;
//         }

//     }
// }

// const final = display.checkers(mark.BMI, john.BMI);
// console.log(final)


// Loops

// For loops
// for (let a = 1; a<=10 ; a++){
//     console.log(`This is ${a} 😍`)
// }

// const friend = ['Python', 'Django', 'AJAX','Javascript'];
// const types = [];
// for(let i = 0; i < friend.length; i++){
//     console.log(friend[i]);
    //First method to fill an array to an array
    //types [i] = friend[i];
    //Another one
//     types.unshift(friend[i])

    
// }
// console.log(types)

// Practical loop

// const Years = [1991, 2000, 1978, 2012];
// const age = [];

// for (let a = 0; a<Years.length; a++){
    //console.log(Years[a]);
//         const ageCalc = 2037 - Years[a]
//     age.push(ageCalc)
// }
// console.log(age)
// Continue keyword

// const geto = [122, 'rat', 'cat', 222, ['opp', 'pot']];
// for(a = 0; a<geto.length; a++){
//     if(typeof geto[a] !== 'string'){
//         continue;
//     }
//     console.log(geto[a])
// }

// const geta = [122, 'rat', 'cat', 222, ['opp', 'pot']];
// for(a = 0; a<geta.length; a++){
//     if(typeof geta[a] !== 'number'){
//         break;
//     }
//     console.log(geta[a])
// }

// const city =[ 'Ibadan', 'Lagos', 
// 'Abeokuta', 
// 'London', 'Manchester city']

// for (a = city.length-1; a >=0; a--){
//     console.log(a ,city[a])

// }

// for(let can = 1; can<=3; can++){
//     console.log(`---Bottling can ${can}`);

//     for (let rep = 1; rep<=5; rep++){
//         console.log(`opening can ${rep} after beign bottled in can ${can}`)
//     }

// } 
// rep = 1;
// while(rep){
//     console.log(rep);
//     rep++;

// }

// While loop for dice

// let dice = Math.trunc(Math.random ()*6) + 1;

// while(dice !==6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random ()*6) + 1;

//     if(dice === 6) console.log("loop end")
// }
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(A){
    if(A >= 50 && A<=300){
        return (15 * A)/ 100;
    }else{
        return (20 * A)/ 100;
    }
}

function sum(A, B){
    return (A+B);
}
console.log(calcTip(40));
function roll(){ 
for (a=0; a <bills.length; a++){
    tips.push(calcTip(bills[a]));
    totals.push(sum(tips[a], bills[a]))

}
}
roll()
console.log(tips);
console.log(totals);

function calcAverage(arr){
    let tot = 0;
    for (let a = 0; a<arr.length; a++){
        tot +=arr[a];
        
    }
    tot /=arr.length
    return tot

}
console.log(calcAverage(totals))




function how(orr){
    let pot = 0;
    for (a = 0; a<orr.length; a++){
        pot +=orr[a];
    }
    return pot/orr.length;
}
const but = [1,3,5];
console.log(how(but))