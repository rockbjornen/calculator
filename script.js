const buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        const clickedValue = e.target.innerText;
        const num = parseFloat(clickedValue);
        if(!isNaN(num)){
            //Handle number clicks here
            console.log(num);
        }
        else {
            //Handle operator clicks here
            console.log(clickedValue);
        }
    }
}