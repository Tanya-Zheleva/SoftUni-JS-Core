function checkMatrix(matrix) {
    let sums = new Array();

    for (let row = 0; row < matrix.length; row++){
        sums.push(getRowSum(row));
    }

    for (let col = 0; col < matrix[0].length; col++){
        sums.push(getColSum(col));
    }

    let sumToCheck = sums[0];

    for (let i = 1; i < sums.length; i++){
        if (sumToCheck !== sums[i]) {
            return false;
        }
    }

    return true;

    function getColSum(col) {
        let sum = 0;

        for (let row = 0; row < matrix.length; row++) {
            sum += matrix[row][col];
        }

        return sum;
    }

    function getRowSum(row) {
        let sum = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col];
        }

        return sum;
    }
}

console.log(checkMatrix([[1 ,0 ,0], [0, 0, 1], [0, 1, 0]]));