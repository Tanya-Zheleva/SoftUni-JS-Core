function solve(a, b) {
    if (!b) {
        return a;
    }

    return solve(b, a % b);
}

console.log(solve(252, 105));