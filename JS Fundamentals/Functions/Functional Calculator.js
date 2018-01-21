function calculate(a, b, op) {
    function calc(a, b, operation) {
        return operation(a, b);
    }

    let add = function (a, b) { return a + b;};
    let sub = function (a, b) { return a - b;};
    let mult = function (a, b) { return a * b;};
    let div = function (a, b) { return a / b;};

    switch (op) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, sub);
        case '*': return calc(a, b, mult);
        case '/': return calc(a, b, div);
    }
}