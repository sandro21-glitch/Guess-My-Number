'use strict';

const playAgain = document.getElementById('btn');
const correctBox = document.getElementById('correct');
const input = document.getElementById('input');
const checkAnswer = document.getElementById('check-btn');
const highOrLow = document.getElementById('high-or-low');
const score = document.getElementById('score');
const highscore = document.getElementById('highscore');


let play = function(){document.getElementById("audio").play()}

let correctAnswer = Math.floor(Math.random() * 20 + 1);
// console.log(correctAnswer)

let gameScore = 20;
let gameHighScore = 0;


checkAnswer.addEventListener('click', () => {
    gameStart()
});

function gameStart() {
    let inputValue = +document.querySelector('#input').value;
    // console.log(inputValue)
    if(inputValue == correctAnswer){
        body.style.backgroundColor = 'green'
        highOrLow.innerText = 'Correct Number';
        correctBox.innerText = correctAnswer;
        checkAnswer.disabled = true;
        checkHighScore();
        play()
    }else if(inputValue > correctAnswer){
        highOrLow.innerText = 'Too High';
        updateScore();
    }else if(inputValue < correctAnswer){
        highOrLow.innerText = 'Too Low';
        updateScore();
    }
}


function updateScore() {
    gameScore--;
    score.innerText = `Score: ${gameScore}`;
    if(gameScore === 0){
        body.style.backgroundColor = 'red'
        highOrLow.innerText = 'You lost the game!';
        checkAnswer.disabled = true;
    }
}

function checkHighScore() {
    gameHighScore = gameScore;
    highscore.innerText = `Highscore: ${gameHighScore}`;
}

const body = document.getElementsByTagName('body')[0];
playAgain.addEventListener('click', () => {
    body.style.backgroundColor = '#222';
    highOrLow.innerText = 'Start guessing...';
    gameScore = 20;
    gameHighScore = gameHighScore;
    score.innerText = `Score: ${gameScore}`;
    highscore.innerText = `Highscore: ${gameHighScore}`;
    input.value = '';
    checkAnswer.disabled = false;
    correctBox.innerText = '?';
});


