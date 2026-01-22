function getNumbers() {
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    return { number1, number2 };
}

function calculate(operation) {
    const { numb1, numb2 } = getNumbers();
    let result;
    switch (operation) {
        case "addition":
            result = numb1 + numb2;
            break;
        case "subtraction":
            result = numb1 - numb2;
            break;
        case "multiplication":
            result = numb1 * numb2;
            break;
        case "division":
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