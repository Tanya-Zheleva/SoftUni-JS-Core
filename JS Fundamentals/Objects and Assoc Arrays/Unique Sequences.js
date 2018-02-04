function getUniqueSequences(input) {
    let uniqueArrays = [];

    for (let i = 0; i < input.length; i++) {
        let current = Array.from(JSON.parse(input[i]))
            .map(Number)
            .sort((a, b) => b - a);

        if (isUnique(current)) {
            uniqueArrays.push(current);
        }
    }

    for (let seq of uniqueArrays.sort((a, b) => a.length - b.length)) {
        console.log(`[${seq.join(', ')}]`);
    }

    function isUnique(sequence) {
        return !uniqueArrays.some(x => x.join('') === sequence.join(''));
    }
}

getUniqueSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
                    '[10, 1, -17, 0, 2, 13]',
                    '[4, -3, 3, -2, 2, -1, 1, 0]']);