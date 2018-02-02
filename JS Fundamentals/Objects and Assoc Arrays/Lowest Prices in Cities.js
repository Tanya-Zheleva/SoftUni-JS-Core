function solve(input) {
    let products = new Map();

    for (let token of input) {
        let [town, product, price] = token.split(/\s*\|\s*/);

        if (!products.has(product)) {
            products.set(product, new Map())
        }

        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let minPrice = Number.MAX_VALUE;
        let minTown = '';

        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minTown})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);