const buttons = document.querySelectorAll('.btn');
let displayedValue = document.querySelector('.display-value');

let currentValue = 0;
let operator = null;
const operators = { "+": "+", "-": "-", "x": "*" }

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
            //Handle operator clicks here
            operator = clickedValue;
            if (operator && operator !== "=") {
                console.log(operators[operator]);
            }
        }
    }
}