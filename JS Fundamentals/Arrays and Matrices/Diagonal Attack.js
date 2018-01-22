function solve(input) {
    let matrix = new Array();

    for (let row = 0; row < input.length; row++) {
        matrix[row] = input[row].split(' ').map(Number);
    }

    let mainSum = 0, secondarySum = 0;
    let row = matrix.length - 1;
    let mainCoords = new Array(), secondaryCoords = new Array();

    for (let r = 0; r < matrix.length; r++) {
        mainSum += matrix[r][r];
        let pair = {r: r, c: r};
        mainCoords.push(pair);
    }

    for (let c = 0; c < matrix.length; c++) {
        secondarySum += matrix[row][c];
        let pair = {r: row, c: c};
        secondaryCoords.push(pair);
        row--;
    }

    if (mainSum === secondarySum) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (!mainCoords.some(x => x.r === r && x.c === c) &&
                    !secondaryCoords.some(x => x.r === r && x.c === c)) {
                    matrix[r][c] = mainSum;
                }
            }
        }
    }

    console.log(matrix.map(r => r.join(' '))
        .join('\n'));
}

solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);