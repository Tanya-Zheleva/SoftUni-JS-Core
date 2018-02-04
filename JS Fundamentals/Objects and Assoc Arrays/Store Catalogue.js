function createCatalogue(input) {
    let catalogue = new Map();

    for (let token of input) {
        let data = token.split(/\s*:\s*/);
        let name = data[0];
        let price = Number(data[1]);
        let letter = name[0];
        let product = new Map();
        product.set(name, price);

        if (!catalogue.has(letter)) {
            catalogue.set(letter, product);
        } else {
            catalogue.get(letter).set(name, price);
        }
    }

    let catalogueKeys = Array.from(catalogue.keys());

    for (let key of catalogueKeys.sort()) {
        console.log(`${key}`);
        let productKeys = Array.from(catalogue.get(key).keys());

        for (let product of productKeys.sort()) {
            let price = catalogue.get(key).get(product);
            console.log(`  ${product}: ${price}`);
        }
    }
}

createCatalogue(['Appricot : 20.4',
                 'Fridge : 1500',
                 'TV : 1499',
                 'Deodorant : 10',
                 'Boiler : 300',
                 'Apple : 1.25',
                 'Anti-Bug Spray : 15',
                 'T-Shirt : 10']);