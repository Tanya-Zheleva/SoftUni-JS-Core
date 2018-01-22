function getElements(input) {
    let k = input[0];
    input.splice(0, 1);

    let firstK = input.slice(0, k);
    let lastK = input
        .reverse()
        .slice(0, k)
        .reverse();

    console.log(firstK);
    console.log(lastK);
}

getElements([2, 7, 8, 9]);