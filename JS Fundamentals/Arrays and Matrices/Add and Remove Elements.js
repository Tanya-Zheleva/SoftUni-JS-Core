function solve(input) {
    let value = 1;
    let array = new Array();

    for (let action of input) {
        action === 'add' ? array.push(value) : array.pop();
        value++;
    }

    let result = array.some(x => x) ? array.join('\n') : 'Empty';

    return result;
}

console.log(solve(['add', 'add', 'add', 'add']));