function createOrbit(input) {
    let [rows, cols, x, y] = input;
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let arr = [];

        for (let j = 0; j < cols; j++) {
            arr.push(0);
        }

        matrix.push(arr);
    }

    let num = 1;
    matrix[x][y] = num;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    while (true) {
        let isFilled = false;
        num++;
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(matrix.length - 1, currentRow + counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(matrix[0].length - 1, currentCol + counter);

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num;
                    isFilled = true;
                }
            }
        }

        counter++;

        if (!isFilled) {
            break;
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

createOrbit([4, 4, 0, 0]);