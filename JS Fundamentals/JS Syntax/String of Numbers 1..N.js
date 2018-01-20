function concat(n) {
    let parsed = Number(n);
    let result = '';

    for (let i = 1; i <= parsed; i++) {
        result += `${i}`;
    }

    return result;
}