'use strict';
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const guessNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const closeModal = function () {
  console.log('buttom clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

function resetGame() {
  score = 20;
  document.querySelector('.valueScore').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', function () {
  let numTry = Number(document.querySelector('.guess').value);
  if (numTry) {
    if (numTry === guessNum) {
      document.querySelector('.message').textContent = '🎉 Correct Answer';
      document.querySelector('.number').textContent = guessNum;
      checkHighscore();
    } else if (numTry !== guessNum) {
      numTry > guessNum
        ? (document.querySelector('.message').textContent = '📉 Too High')
        : (document.querySelector('.message').textContent = '📈 Too Low');
      score--;
      document.querySelector('.valueScore').textContent = score;
      checkHighscore();
    }
  } else {
    document.querySelector('.message').textContent = '⛔️ No Guess Number';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  highScore = score > highScore ? score : highScore;
  document.querySelector('.valueHigh').textContent = highScore;
  resetGame();
});

btnCloseModal.addEventListener('click', closeModal);
