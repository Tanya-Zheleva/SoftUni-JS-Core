function extract(array) {
    let sequence = new Array();
    sequence.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        if (array[i] >= sequence[sequence.length - 1]) {
            sequence.push(array[i]);
        }
    }

    console.log(sequence.join('\n'));
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24])