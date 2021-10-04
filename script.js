'use strict';

//select button
const checkBtn = document.querySelector('.check');
//select input number
const inputNumber = document.querySelector('.guess');
// select message element
const message = document.querySelector('.message');
// select score element
const score = document.querySelector('.score');
// select label hightScore
const labelHighScore = document.querySelector('.highscore');
// select correctNumber
const correctNumber = document.querySelector('.number');
// select AgainBtn 
const againBtn = document.querySelector('.again');

//hight Score number
let Score = 20;
let highScore = 0;
//random number
let random = Math.trunc(Math.random() * 20) + 1;


//проверяющая функция
const checkFn = function (e) {
    let nowNumber = +inputNumber.value;
    nowNumber === random ? correct() : displayFn(nowNumber);
    if (Score === 0) tolose();
};

// click button

checkBtn.addEventListener('click', checkFn);

// too low or to big function

const displayFn = function (number) {
    Score--;
    message.textContent = number > random ? `Слишком большое! 📈` : `Cлишком маленькое! 📉`;
    score.textContent = Score;
};


//Correct function
const correct = function () {
    message.textContent = `Верно! 🎉`;
    labelHighScore.textContent = +labelHighScore.textContent > Score ? labelHighScore.textContent : Score;
    correctNumber.textContent = inputNumber.value;
    correctNumber.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    checkBtn.removeEventListener('click', checkFn);
};

// lose function
const tolose = function () {
    message.textContent = `Ты проиграл!😭`;
    checkBtn.removeEventListener('click', checkFn);
};

//click again button
againBtn.addEventListener('click', function () {
    Score = 20;
    random = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    correctNumber.textContent = '?';
    correctNumber.style.width = '15rem';
    message.textContent = 'Start guessing...';
    inputNumber.value = '';
    score.textContent = '20';
    checkBtn.addEventListener('click', checkFn);
});