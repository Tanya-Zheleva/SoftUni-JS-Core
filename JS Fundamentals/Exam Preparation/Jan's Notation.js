function solve(input) {
    let storedNumbers = [];

    for (let token of input) {
        if (isNumeric(token)) {
            storedNumbers.push(Number(token));
        } else {
            if (storedNumbers.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else {
                let second = storedNumbers.pop();
                let first = storedNumbers.pop();

                switch (token) {
                    case '+':
                        storedNumbers.push(first + second);
                        break;
                    case '-':
                        storedNumbers.push(first - second);
                        break;
                    case '*':
                        storedNumbers.push(first * second);
                        break;
                    case '/':
                        storedNumbers.push(first / second);
                        break;
                }
            }
        }
    }

    if (storedNumbers.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(storedNumbers[0]);
    }

    function isNumeric(value) {
        return /^-?\d+(?:\.?\d+|\d*)$/.test(value);
    }
}

solve([5, 3, 4, '*', '-']);
solve([15, '/']);