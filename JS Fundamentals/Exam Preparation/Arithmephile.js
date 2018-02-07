function solve(input) {
    let parsed = input.map(Number);
    let products = [];

    for (let i = 0; i < parsed.length - 1; i++) {
        let current = parsed[i];

        if (current >= 0 && current < 10) {
            let product = 1;
            let end = i + current >= parsed.length ? parsed.length - 1 : i + current;

            for (let start = i + 1; start <= end; start++) {
                product *= parsed[start];
            }

            products.push(product);
        }
    }

    let max = Math.max.apply(null, products);
    console.log(max);
}

//solve(['10', '20', '2', '30', '44', '3', '56', '20', '24']);
solve([1, -1, 2, 19, 13, 8, -5, -3, 8, 19, -9, 18, 16, 15, 15, -10, -4, 12, 5, 7, 13, -9, 4, 5, 18, 15, 16, 18, 9, -3]);