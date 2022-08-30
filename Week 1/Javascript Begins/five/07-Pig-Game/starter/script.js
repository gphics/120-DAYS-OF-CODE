'use strict';

// Getting the DOM element
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const newroll = document.querySelector('.btn--roll');
const newhold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
//Assigning functionality
score0.textContent = 0;
score1.textContent = 0;
diceEL.classList.add('hidden');
let currentScore = 0;
let playing = true;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
}
// score
const score = [0, 0];
let activePlayer = 0;
// Dice rolling functionality

newroll.addEventListener('click', function () {
  if (playing) {
    //Random number

    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //Check for rolled dice
    if (dice !== 1) {
      // switch to the next player
    
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //    currentScore0.textContent = currentScore;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

newhold.addEventListener('click', function () {
    if (playing){
  // add score
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  //Sum it up
  if (score[activePlayer] >= 20) {
      playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('.player--active');
      diceEL.classList.add('hidden');
  } else {
    switchPlayer();
  }
}
});

newGame.addEventListener("click", function(){

      
})

// newGame.addEventListener('click', function(){

//     score0.textContent = 0;
//     score1.textContent=0;
//     currentScore0.textContent=0;
//     currentScore1.textContent=0;  
//       diceEL.classList.add('hidden');
//    player0EL.classList.toggle('player--active');
//     player1EL.classList.toggle('player--active');
//         document
//           .querySelector(`.player--${activePlayer}`)
//           .classList.remove('player--winner');
//         document;
// })