console.log('JS OK')

// Get elements from the DOM

const timer = document.getElementById('timer');
const startGame = document.getElementById('start-game');
const randomNumberList = document.getElementById('random-number-list');
const numberInput = document.getElementById('number-input');
const result = document.getElementById('result');



// Variable for the Timing function
let intervalCountdown;


// Function
const generateRandomNumber = () => {

    let randomPcNumber = [];

    while(randomPcNumber.length < 5) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 100) + 1;
        } while (randomPcNumber.includes(randomNumber));
        randomPcNumber.push(randomNumber);
        
    }
    
    return randomPcNumber;
}

// Random number Array
let randomNumber;




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
            numberInput.classList.remove('d-none')
            randomNumberList.classList.add('d-none')
        }
    }, 1000);
    
    // Discover UL list
    randomNumberList.classList.remove('d-none')

    // Create random Number
    randomNumber = generateRandomNumber();
    console.log(randomNumber)
    

    // Create list item and insert into DOM
    for (let i = 0; i < randomNumber.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = randomNumber[i];
        randomNumberList.appendChild(listItem);
    }

})