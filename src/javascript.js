const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.btn');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.clearHistory');


let result = '';



function displayNumbers() {
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentNumber.innerHTML === '') 
    return currentNumber.innerHTML = '0.';

    currentNumber.innerHTML += this.textContent;
}

function operate() {
    
}

function showResult() {

}

function clearScreen() {

}


function clearHistory() {
    
}
















// listeneres

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
});

historyBtn.addEventListener('click', clearHistory);