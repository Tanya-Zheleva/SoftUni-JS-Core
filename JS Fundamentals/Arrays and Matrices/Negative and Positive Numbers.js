function solve(input) {
    let result = new Array();

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (current < 0) {
            result.unshift(current);
        }
        else {
            result.push(current);
        }
    }

    return result;
}

console.log(solve([7, -2, 8, 9]));