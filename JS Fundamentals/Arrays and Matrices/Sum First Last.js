function sum(input) {
    input = input.map(x => Number(x));
    let first = input[0];
    let last = input[input.length - 1];
    let sum = first + last;

    return sum;
}

console.log(sum(['20', '30', '40']));