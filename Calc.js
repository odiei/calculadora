const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result');

let value = "";
let booleanValue = false;
let secondValue = "";
let booleanSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", (e) => {
        let atr = e.target.getAttribute("value");
        if(booleanValue === false) {
            gettingFirstValue(atr);
        }
    })
}

function gettingFirstValue(x){
    result.innerHTML = "";
    value += x;
    result.innerHTML = value;
    value += gettingFirstValue;

}
