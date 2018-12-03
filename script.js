const buttons = document.querySelectorAll('.btn');
const operators = { "+": "+", "-": "-", "x": "*" };

let displayedValue = document.querySelector('.display-value');
let operator = null;
let currentValue = 0;
let previousClick = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        const clickedValue = e.target.innerText;
        const num = parseFloat(clickedValue);
        if (!isNaN(num)) {
            //Handle number clicks here
            console.log(num);
            displayedValue.innerText = num;
        }
        else {
            handleOperatorClick(clickedValue);
        }
        previousClick = clickedValue;
    }
}

const handleOperatorClick = (clickedValue) => {
    if (operator && operator !== "=" && !isPreviousClickAnAction(previousClick)) {
        const equation = currentValue + operators[operator] + displayedValue.innerText;
        const value = eval(equation);
        displayedValue.innerText = value;
    }
    currentValue = parseInt(displayedValue.innerText);
    operator = clickedValue;
}

const isPreviousClickAnAction = (previousClick) => {
    return previousClick in operators;
}