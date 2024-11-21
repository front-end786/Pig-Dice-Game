'use strict';

/*------------------------------------
Reusable Variables -------------------
--------------------------------------
*/

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const currunt0EL = document.querySelector('#current--0');
const currunt1EL = document.querySelector('#current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
let curruntScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    curruntScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

// AddEventLister Mathod.

btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a rendom dice roll.
        const dice = Math.trunc(Math.random() * 6) + 1;
        // Display Dice.
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;
        // 3. Checked for rolled 1
        if (dice !== 1) {
            // Add dice to currunt score.
            curruntScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = curruntScore;
            // currunt0EL.textContent = curruntScore;
        }
        // switch to the next player.
        else {
            switchPlayer();
        }

    }
});

btnHold.addEventListener('click', function () {

    // 1: Add currunt score to active player's score.

    scores[activePlayer] += curruntScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    // 2: Check if player score is >=100
    if (scores[activePlayer] >= 100) {
        // 3: Finish the game.
        playing === false;
        diceEL.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`#name--${activePlayer}`).textContent = 'You win';
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
        // Switch to the nmext player.
        switchPlayer();
    }

});
btnNew.addEventListener('click', function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

});