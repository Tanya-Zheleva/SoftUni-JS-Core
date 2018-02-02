function solve(input) {
    let towns = new Map();

    for (let token of input) {
        let [town, product, salesData] = token.split(/\s*->\s*/);
        let [amount, price] = salesData.split(/\s*:\s*/);
        let income = amount * price;

        if (!towns.has(town)) {
            towns.set(town, new Map());
            towns.get(town).set(product, income);
        } else {
            if (!towns.get(town).has(product)) {
                towns.get(town).set(product, income);
            } else {
                let old = towns.get(town).get(product);
                towns.get(town).set(product, old + income);
            }
        }
    }

    for (let [town, v] of towns) {
        console.log(`Town - ${town}`);

        for (let [product, income] of v) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1']);