function encode(input) {
    let n = Number(input.shift());
    let template = [];

    for (let i = 0; i < n; i++) {
        let data = input
            .shift()
            .split(' ')
            .map(Number);
        template.push(data);
    }

    let matrix = [];

    for (let row of input) {
        let data = row
            .split(' ')
            .map(Number);
        matrix.push(data);
    }

    let result = '';

    for (let row = 0; row < matrix.length; row++) for (let col = 0; col < matrix[0].length; col++) {
        let current = matrix[row][col];
        let targetRow = row % template.length;
        let targetCol = col % template[0].length;
        let temp = template[targetRow][targetCol];
        let symbol = String.fromCharCode(((current + temp) % 27) + 64);
        result += symbol;
    }

    result = result.replace(/@/g, ' ');
    console.log(result);
}

encode(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);

encode([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);

encode(['1',
        '1 3 13',
        '12 22 14 13 25 0 4 24 23',
        '18 24 2 25 22 0 0 11 18',
        '8 25 6 26 8 23 13 4 14',
        '14 3 14 10 6 1 6 16 14',
        '11 12 2 10 24 2 13 24 0',
        '24 24 10 14 15 25 18 24 12',
        '4 24 0 8 4 22 19 22 14',
        '0 11 18 26 1 19 18 13 15',
        '8 15 14 26 24 14 26 24 14']);