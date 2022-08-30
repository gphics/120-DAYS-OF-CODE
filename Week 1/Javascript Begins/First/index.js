// // Dolphins
// // Koalas
// // 3 Time
// // 1) Average score
// // 2) compare the team Averagescore and annouse a winner 

// // 1

// const dolphins =(96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) /3;

// console.log('Dolphins team has ' + dolphins + " points");
// console.log('Koalas team has ' + koalas + " points");

// // 2

// if (dolphins > koalas){
//     console.log(`Dolphins has the highest point ${dolphins}`)

// }else if(dolphins == koalas){
//     console.log("Draw !!")
// }else{
//     console.log(`Koalas has the highest points ${koalas}`)
// }

// //Bonus 3
// const req = 100
// //Comparing Dolphin against required score
// const firstDolphin = 97  > req ;
// const secondDolphin = 112 > req  ;
// const thirdDolphin = 101  > req ;

// if (secondDolphin && thirdDolphin){
//     console.log("You passed the required score twice")
// }
// //Comparing Koalas against required score

// const firstkoalas = 109  > req ;
// const secondkoalas = 95 > req  ;
// const thirdkoalas = 123 > req ;

// if(thirdkoalas){
//     console.log('you passed the required score once')
// }

// // Checking Dolphin score

// if (firstDolphin > firstkoalas){
//     console.log('Dolphin wins ')
// }

// if (secondDolphin > secondkoalas){
//     console.log('Dolphin wins')
// }

// if (thirdDolphin > thirdkoalas){
//     console.log('Dolphin wins ')
// }

// //Checking for Koalas score

// if (firstDolphin < firstkoalas){
//     console.log('koalas wins ')
// }

// if (secondDolphin < secondkoalas){
//     console.log('koalas wins ')
// }

// if (thirdDolphin < thirdkoalas){
//     console.log('koalas wins ')
// }

//switch

// const day ='sunday'

// switch(day){
//     case 'sunday':
//         console.log("sleeping");


//     case 'don':
//     case 'fon':
//         console.log("welcome here")
//         break;
//     default:
//         console.log('Invalid')
// }

// if (day === 'thursday' || day === 'friday'){
//     console.log("Welcome the greatest youth")
// }else{
//     console.log("Happpybf bbfhfdf")
// }

//Ternary operators

// const vue = 1;
// const vonic = vue >=18 ? "Vawulence shall find its route":"openfire"
// console.log(vonic)
// console.log(`This is the best ${vue >=18 ? "Vawulence shall find its route":"openfire"}`)


//Ternary operation challenge ... The tip calculator
let tip;
const A = 50;
const B = 300;
const bill = 430;
tip= bill <=300 && bill >=90  ?    "15%" : "20%"
tip = parseInt(tip)
tip = (tip * bill) / 100
console.log(`The bill was ${bill}, the tip  was ${tip} and the total value was ${tip + bill}`)