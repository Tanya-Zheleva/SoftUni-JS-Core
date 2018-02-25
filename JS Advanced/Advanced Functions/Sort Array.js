function solve(numbers, sorting) {
    if (sorting === 'asc') {
        numbers = numbers.sort((a, b) => a - b);
    } else {
        numbers = numbers.sort((a, b) => b - a);
    }

    return numbers
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));