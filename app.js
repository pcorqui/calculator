const userInput = document.getElementById("userInput");

var expression = '';
function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression)
    expression = '';
}

function limpiar(){
    expression = '';
    userInput.value = expression;
}

function positive(){
    console.log('invocada positive');
}