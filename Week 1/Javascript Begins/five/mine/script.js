'use strict'

//Getting all the dom elements
let Current0= document.getElementById("current--0");
let Current1= document.getElementById("current--1");
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let diceRoll = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold")
let newGame = document.querySelector(".btn--new")
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");

// Setting all score to zero
Current0.textContent=0;
Current1.textContent=0;
score0.textContent=0;
score1.textContent=0;
let total = [0, 0];
let playing=true;
//Continuation'

// hiding the dice images
let dicePic = document.querySelector('.dice');
dicePic.classList.add("hidden")

//
let currentScore=0

//Active player;
let activePlayer = 0;
//switch function
function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1 :0;
     currentScore = 0;
    // player0.classList.toggle('player--active');
    // player1.classList.toggle('player--active')

      player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
// Creating the dice roll effect;

diceRoll.addEventListener("click", function(){
    //Setting the dice roll
    if(playing){
    const dice = Math.trunc(Math.random()*6) + 1;
    dicePic.classList.remove("hidden");
    dicePic.src = `dice-${dice}.png`

    if (dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    }else{
        switchPlayer()
    }
}
})

hold.addEventListener("click", function(){
    if (playing){
        total[activePlayer] +=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = total[activePlayer];
        // document.getElementById(`current--${activePlayer}`).textContent=0;
        if (total[activePlayer] >= 10){
            playing=false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dicePic.classList.add("hidden");
        
        }else{
            switchPlayer()
        
}}
})
