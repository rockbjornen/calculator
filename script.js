const buttons = document.querySelectorAll('.btn');
const operators = {
    "+": "+",
    "-": "-",
    "x": "*",
    "÷": "/",
    ",": "."
};

let displayedValue = document.querySelector('.display-value');
let operator = null;
let currentValue = 0;
let previousClick = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        const clickedValue = e.target.innerText;
        const num = parseFloat(clickedValue);
        if (!isNaN(num)) {
            handleNumberClick(num);
        }
        else {
            handleOperatorClick(clickedValue);
        }
        previousClick = clickedValue;
    }
}

const handleNumberClick = (num) => {
    if (!isNaN(num)) {
        if (currentValue === parseFloat(displayedValue.innerText)) {
            setDisplayedValue(num);
        } else {
            const value = displayedValue.innerText += num;
            setDisplayedValue(value);
        }
    }
}

const setDisplayedValue = (value) => {
    if(value.toString().length > 8) {
        document.getElementById("display-window").className = "display-value-many-digits";
    }
    displayedValue.innerText = value;
}

const handleOperatorClick = (clickedValue) => {
    if (clickedValue === "AC") {
        currentValue = 0;
        operator = null;
        setDisplayedValue(0);
    }
    else if (clickedValue === "±") {
        currentValue = parseFloat(displayedValue.innerText) * -1;
        action = null;
        setDisplayedValue(currentValue);
    }
    else if (clickedValue === "%") {
        currentValue = parseFloat(displayedValue.innerText) * 0.01;
        action = clickedValue;
        setDisplayedValue(currentValue);
    }
    else if (clickedValue === ",") {
        currentValue = displayedValue.innerText;
        if (currentValue.indexOf(".") === -1) {
            currentValue += ".";
        };
        setDisplayedValue(currentValue);
    }
    else {
        if (operator && operator !== "=" && !isPreviousClickAnAction(previousClick)) {
            const equation = currentValue + operators[operator] + displayedValue.innerText;
            const value = eval(equation);
            setDisplayedValue(value);
        }
        currentValue = parseFloat(displayedValue.innerText);
        operator = clickedValue;
    }
}

const isPreviousClickAnAction = (previousClick) => {
    return previousClick in operators;
}