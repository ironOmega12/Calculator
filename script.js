const output = document.querySelector('#calculations');
const buttons = document.querySelectorAll('button');
let operator = '';
let firstArg = '';
let secondArg = '';

function add(num1, num2) {
    let sum = parseFloat(num1) + parseFloat(num2);
    return sum;
}

function substract(num1, num2) {
    let substraction = parseFloat(num1) - parseFloat(num2);
    return substraction;
}

function multiply(num1, num2) {
    let multi = parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'not possible';
    } else {
        return parseFloat(num1) / parseFloat(num2);
    }
}

function power(num1, num2) {
    return Math.pow(parseFloat(num1), parseFloat(num2));
}

function operations(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return substract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        case '^':
            return power(num1, num2);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (!operator) {
            firstArg += value;
            output.textContent = firstArg;
        } else {
            secondArg += value;
            output.textContent = secondArg;
        }
        if (['+', '-', '*', '/', '^'].includes(value)) {
            if (firstArg && operator && secondArg) {
                firstArg = operations(operator, firstArg, secondArg).toString();
                output.textContent = firstArg;
                secondArg = '';
            }
            operator = value;
        }
        if (value === '=') {
            if (firstArg && operator && secondArg) {
                const result = operations(operator, firstArg, secondArg);
                output.textContent = result;
                firstArg = result.toString();
                operator = '';
                secondArg = '';
            }
        }
        if (value === 'ac') {
            firstArg = '';
            operator = '';
            secondArg = ''
            output.textContent = 'All cleared';
        }
    })
})