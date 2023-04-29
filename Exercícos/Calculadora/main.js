var num1 = '';
var num2 = '';
var operator = false;
var res = null;
const display = document.querySelector('.display');

function insert(n){
    if (!operator){
        num1 += n;
        display.textContent = num1;

    }
    else{
        num2 += n;
        display.textContent =  num2;
    }
}

function op(a){
    operator = true;
    display.textContent = a;
    operator_value = a
}

function calculate(){
    switch (operator_value) {
        case '+':
          res = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          res = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          res = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          res = parseFloat(num1) / parseFloat(num2);
          break;
      }
    display.textContent = res;
    num1 = res;
    num2 = '';
}

function clearDisplay(){
    display.textContent = '';
    num1 = '';
    num2 = '';
    res = '';
    operator = false;
    operator_value = '';
}

function backspace(){
    if (!operator){
        num1 = num1.slice(0, -1);
        display.textContent = num1
    } else {
        num2 = num2.slice(0, -1);
        display.textContent = num2
    }
}
