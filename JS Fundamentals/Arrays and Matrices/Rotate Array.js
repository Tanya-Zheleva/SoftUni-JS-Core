function rotate(input) {
    let rotations = input[input.length - 1];
    input.splice(input.length - 1, 1);
    rotations %= input.length;

    for (let i = 0; i < rotations; i++) {
        let temp = input[input.length - 1];
        input.pop()
        input.unshift(temp);
    }

    console.log(input.join(' '));
}

rotate([1, 2, 3, 4, 2]);