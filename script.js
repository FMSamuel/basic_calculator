function getNumbers() {
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    return { number1, number2 };
}

function calculate(operation) {
    const { numb1, numb2 } = getNumbers();
    
    let result;
    switch (operation) {
        case 'addition':
            result = numb1 + numb2;
            break;
        case 'subtraction':
            result = numb1 - numb2;
            break;
        case 'multiplication':
            result = numb1 * numb2;
            break;
        case 'division':
            if (numb1 >= numb2)
                result = numb1 / numb2;
            else
                result = numb2 / numb1;
            break;
        default:
            result = "Invalid operation";
    }

    return result;
}

document.getElementById('addition').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('addition')}`;
});

console.log('result');

document.getElementById('subtraction').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('subtraction')}`;
});

document.getElementById('multiplication').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('multiplication')}`;
});

document.getElementById('division').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('division')}`;
});

console.log("Hello");