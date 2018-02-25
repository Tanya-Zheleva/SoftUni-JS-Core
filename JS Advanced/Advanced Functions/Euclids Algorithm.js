function solve(a, b) {
    if (a === 0) {
        return b;
    }

    while (b !== 0) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    return a;
}

console.log(solve(252, 105));