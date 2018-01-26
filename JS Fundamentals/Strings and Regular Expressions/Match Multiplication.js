function matchMultiplication(input) {
    let pattern = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;

   input = input.replace(pattern, (match, x, y) => Number(x) * Number(y));

   console.log(input);
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2 *0.5 (deposit).');