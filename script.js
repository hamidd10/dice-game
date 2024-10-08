"use strict";
const score_0 = document.querySelector("#score--0");
const score_1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");

const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");

const current_0 = document.getElementById("current--0");
const current_1 = document.getElementById("current--1");

const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");

score_0.textContent = 0;
score_1.textContent = 0;
dice.classList.add("hidden");

const scors = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let isGamePlaying = true;

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player_0.classList.toggle("player--active");
  player_1.classList.toggle("player--active");
}

btn_roll.addEventListener("click", function () {
  if (isGamePlaying) {
    const diceRandomNumber = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${diceRandomNumber}.png`;
    dice.classList.remove("hidden");

    if (diceRandomNumber !== 1) {
      currentScore += diceRandomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch Player
      switchPlayer();
    }
  }
});

btn_hold.addEventListener("click", function () {
  if (isGamePlaying) {
    scors[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scors[activePlayer];

    if (scors[activePlayer] >= 30) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
      isGamePlaying = false;
    } else {
      switchPlayer();
    }
  }
});
