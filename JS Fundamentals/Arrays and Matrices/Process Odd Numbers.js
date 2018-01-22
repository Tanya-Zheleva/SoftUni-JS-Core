function processOddPositionNumbers(input) {
    let numbers = input
        .filter((x, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse();

    return numbers;
}

console.log(processOddPositionNumbers([10, 15, 20, 25]));