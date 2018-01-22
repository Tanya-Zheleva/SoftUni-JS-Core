function getSmallestNumbers(input) {
    let numbers = input.sort((x, y) => x - y)
        .slice(0, 2);

    return numbers;
}

console.log(getSmallestNumbers([30, 15, 50, 5]));