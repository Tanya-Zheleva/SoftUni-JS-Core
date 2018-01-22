function sumLastKNumbers(n, k) {
    let sequence = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = sequence.slice(start, end + 1).reduce((a, b) => a + b, 0);
        sequence[current] = sum;

    }

    console.log(sequence.join(' '));
}

sumLastKNumbers(6, 3);