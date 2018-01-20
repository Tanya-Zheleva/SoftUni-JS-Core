function draw(n) {
    let lines = n % 2 === 0 ? n - 1 : n;
    let middleRow = Math.ceil(lines / 2);
    let result = '';

    for(let i = 1; i <= lines; i++) {
        if (i === 1 || i === lines || i === middleRow) {
            result += '+';

            for(let j = 0; j < n - 2; j++) {
                result += '-';
            }

            result += '+';

            for(let j = 0; j < n - 2; j++) {
                result += '-';
            }

            result += '+';
        } else {
            result += '|';

            for(let j = 0; j < n - 2; j++) {
                result += ' ';
            }

            result += '|';

            for(let j = 0; j < n - 2; j++) {
                result += ' ';
            }

            result += '|';
        }

        result += '\n';
    }

    console.log(result);
}