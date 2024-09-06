//select elements const

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const result = document.querySelector('.value span');
const decimal = document.querySelector('.decimal');
const ac = document.querySelector('.ac');
const pm = document.querySelector('.pm');
//const percent = document.querySelector('.percent');
const equal = document.querySelector('.equal');

//def var 

let value1 = "";
let value2 = "";
let currentOperator = "";
let shouldResetDisplay = false;

//functions 

function calculate() {
    //This function is responsible for doing the calculations
    if (currentOperator && value1) {
        value2 = result.textContent;
        switch (currentOperator) {
            case '+':
                updateDisplay((parseFloat(value1) + parseFloat(value2)).toString());
                break;
            case '−':
                updateDisplay((parseFloat(value1) - parseFloat(value2)).toString());
                break;
            case '×':
                updateDisplay((parseFloat(value1) * parseFloat(value2)).toString());
                break;
            case '÷':
                updateDisplay((parseFloat(value1) / parseFloat(value2)).toString());
                break;
            default:
                break;
        }
    }
}


function updateDisplay(value) {
    result.textContent = value;
}

//Event click for each number 
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        const value = e.target.textContent;
        if (shouldResetDisplay) {
            updateDisplay(value);
            shouldResetDisplay = false;
        } else {
            updateDisplay(result.textContent === '0' ? value : result.textContent + value);
        }
    });
});

//
//Event click for each operator
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        const value = e.target.textContent;
        if (currentOperator && !shouldResetDisplay) {
            calculate();
        }
        value1 = result.textContent;
        currentOperator = value;
        shouldResetDisplay = true;
    });
});
//= click
equal.addEventListener('click', () => {
    if (currentOperator) {
        calculate();
        currentOperator = "";
    }
});
// Clear click
ac.addEventListener('click', () => {
    value1 = "";
    value2 = "";
    currentOperator = "";
    updateDisplay('0');
});

pm.addEventListener('click', () => {
    const currentValue = parseFloat(result.textContent);
    const newValue = currentValue * -1;
    updateDisplay(newValue.toString());
});

//idk = percent.addEventListener('click', () => {
//;
//});

// Add .
decimal.addEventListener('click', () => {
    if (!result.textContent.includes('.')) {
        updateDisplay(result.textContent + '.');
    }
});