function printArray(input) {
    let delimiter = input[input.length - 1];
    input.splice(input.length - 1, 1);

    console.log(input.join(delimiter));
}

printArray(['One', 'Two', 'Three', '-']);