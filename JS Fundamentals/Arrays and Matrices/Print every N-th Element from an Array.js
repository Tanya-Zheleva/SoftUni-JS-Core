function solve(arr) {
    let step = arr.pop();
    let newArr = arr.filter((e, i) => i % step === 0);

    console.log(newArr.join('\n'));
}

solve(['dsa', 'asd', 'test', 'test', 2]);