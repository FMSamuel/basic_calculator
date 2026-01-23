function getNumbers() {
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('addition').addEventListener('click', console.log(number1, number2));

    return { number1, number2 };
}

getNumbers();

/*function calculate(operation) {
    const { number1, number2 } = getNumbers();
    
    let result;
    switch (operation) {
        case 'addition':
            result = number1 + number2;
            break;
        case 'subtraction':
            result = number1 - number2;
            break;
        case 'multiplication':
            result = number1 * number2;
            break;
        case 'division':
            if (number1 >= number2)
                result = number1 / number2;
            else
                result = number2 / number1;
            break;
        default:
            result = "Invalid operation";
    }

    return result;
}

document.getElementById('addition').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('addition')}`;
});

//console.log('result');

document.getElementById('subtraction').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('subtraction')}`;
});

document.getElementById('multiplication').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('multiplication')}`;
});

document.getElementById('division').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('division')}`;
});*/

//console.log("Hello");