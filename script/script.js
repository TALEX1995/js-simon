console.log('JS OK')

// Get elements from the DOM

const timer = document.getElementById('timer');
const startGame = document.getElementById('start-game');
const randomNumberList = document.getElementById('random-number-list');
const numberInput = document.getElementById('number-input');
const result = document.getElementById('result');



// Variable for the Timing function
let intervalCountdown;



// Function click on the play button

startGame.addEventListener('click', () => {
    // Countdown timer
    let timerCountdown = 30
    // Timing function for the timer countdown
    intervalCountdown = setInterval (() => {
        timerCountdown--,
        timer.innerText = timerCountdown;
        if (timerCountdown === 0) {
            clearInterval(intervalCountdown)
        }
    }, 1000);
    
    
})