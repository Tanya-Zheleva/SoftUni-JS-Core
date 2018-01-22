function generateSpiralMatrix(n, m) {
    let matrix = new Array(n);

    for (let r = 0; r < n; r++) {
        matrix[r] = new Array(m);
    }

    let rowFrames = n % 2 === 0 ? n / 2 : n / 2 + 1;
    let colFrames = m % 2 === 0 ? m / 2 : m / 2 + 1;
    let frames = n > m ? colFrames : rowFrames;

    let max = n * m;
    let counter = 1;

    for (let i = 0; i < frames; i++) {
        let row = i;
        let col = i;

        while (col < m - i) {
            matrix[row][col] = counter;

            counter++;
            col++;
        }

        if (counter > max) {
            break;
        }

        row++;
        col--;

        while (row < n - i) {
            matrix[row][col] = counter;

            counter++;
            row++;
        }

        if (counter > max) {
            break;
        }

        row--;
        col--;

        while (col > -1 + i) {
            matrix[row][col] = counter;

            counter++;
            col--;
        }

        if (counter > max) {
            break;
        }

        col++;
        row--;

        while (row > 0 + i) {
            matrix[row][col] = counter;

            counter++;
            row--;
        }

        if (counter > max) {
            break;
        }
    }

    console.log(matrix
        .map(r => r.join(' '))
        .join('\n'));
}

generateSpiralMatrix(5, 5);