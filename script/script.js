console.log('JS OK')

// Get elements from the DOM

const timer = document.getElementById('timer');
const startGame = document.getElementById('start-game');
const randomNumberList = document.getElementById('random-number-list');
const numberInput = document.getElementById('number-input');
const result = document.getElementById('result');
const sendUserNumber = document.getElementById('send-user-number');
const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const number3 = document.getElementById('number-3');
const number4 = document.getElementById('number-4');
const number5 = document.getElementById('number-5');

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


// Variable for the Timing function
let intervalCountdown;


// Function click on the play button

startGame.addEventListener('click', () => {
    
    // Restart
    randomNumberList.innerHTML = ''
    numberInput.classList.add('d-none');
    number1.disabled = false
    number2.disabled = false
    number3.disabled = false
    number4.disabled = false
    number5.disabled = false
    number1.value = ''
    number2.value = ''
    number3.value = ''
    number4.value = ''
    number5.value = ''
    result.innerText = ''
    
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


sendUserNumber.addEventListener('click', (event) => {
    // Stop submit
    event.preventDefault()

    // Show number
    randomNumberList.classList.remove('d-none')


    // Disabled the input
    number1.disabled = true
    number2.disabled = true
    number3.disabled = true
    number4.disabled = true
    number5.disabled = true
    
    // Result
    let resultPoint = 0;
    
    // Create Array with the user input value
    const userNumberArray = [parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)]
    
    // Cicle to see if the input user number are inside the random number Array
    for (let i = 0; i < userNumberArray.length; i++) {
        if(randomNumber.includes(userNumberArray[i])) {
            resultPoint++
        } 
    }

    // Insert result into DOM
    if (resultPoint === 1) {
        result.innerText = `Hai totalizzato ${resultPoint} punto`
    } else {
        result.innerText = `Hai totalizzato ${resultPoint} punti` 
    }
    
})