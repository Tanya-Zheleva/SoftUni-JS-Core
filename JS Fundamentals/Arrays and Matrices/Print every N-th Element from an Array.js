function printNthElements(input) {
    let step = input[input.length - 1];
    input.splice(input.length - 1, 1);

    for (let i = 0; i < input.length; i += step) {
        console.log(input[i]);
    }
}

printNthElements([1, 2, 3, 4, 5, 6]);