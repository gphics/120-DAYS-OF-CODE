'use strict'

// Setting the secret number
const secretNumber =  Math.trunc(Math.random()*20) +1;
let score = 20;
let highScore = 0;
// Getting the name of the user
const user = prompt("whats your name");
document.querySelector("small").textContent = `welcome ${user}`;
// Check function
function Check(){
    document.querySelector(".check").addEventListener("click", function(){
        let guess = document.querySelector(".guess").value;
        guess = parseInt(guess)
       if (!guess){
        document.querySelector(".message").textContent = "You diddnt input anything"
       } else if (guess === secretNumber){
        document.querySelector(".message").textContent = `You win 🤗 ${user} `;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector(".message").style.color = 'white';

        if (score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore
        }


       }else if (guess !== secretNumber){
        if (score > 1 ){
            if (guess < secretNumber){
                document.querySelector(".message").textContent = 'Too low !';
                score--;
                document.querySelector(".score").textContent = score;
            
                document.querySelector(".message").style.color = 'pink';
            } else{
                document.querySelector(".message").textContent = 'Too high !';
                score--;
                
                document.querySelector(".score").textContent = score;
                document.querySelector(".message").style.color = 'red';
        }
        }else{
             document.querySelector(".message").textContent = 'You lose !'
        }
       }

    })
}

// Caling the check function
Check()

//Again function

function Again(){
    document.querySelector(".again").addEventListener("click", function(){
        document.querySelector(".number").textContent = '?';
        document.querySelector(".guess").value = '';
        document.querySelector(".message").textContent = 'start guessing ....';
        document.querySelector(".message").style.color = 'white';
        score = 20;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor =  '#222';
        document.querySelector(".number").style.width = '15rem';

    })
}

// Calling again function
Again()