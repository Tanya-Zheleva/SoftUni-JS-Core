function filter(input) {
    let result = new Array();

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result.push(input[i]);
        }
    }

    let resultString = result.join(' ');

    return resultString;
}

console.log(filter(['20', '30', '40']));