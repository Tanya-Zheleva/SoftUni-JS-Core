function getMax(input) {
    let max = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let current = input[row][col];

            if (current > max) {
                max = current;
            }
        }
    }

    return max;
}

console.log(getMax([[20, 50, 10], [8, 33, 145]]));