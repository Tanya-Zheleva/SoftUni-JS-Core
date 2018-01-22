function getDiagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let col = 0;
    let row = matrix.length - 1;

    for (let r = 0; r < matrix.length; r++) {
        mainDiagonalSum += matrix[r][col];
        col++;
    }

    for (let c = 0; c < matrix.length; c++) {
        secondaryDiagonalSum += matrix[row][c];
        row--;
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

getDiagonalSums([[20, 40], [10, 60]]);