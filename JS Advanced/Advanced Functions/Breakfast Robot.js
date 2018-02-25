let res = (() => {
    let stock = new Map();
    stock.set('protein', 0);
    stock.set('carbohydrate', 0);
    stock.set('fat', 0);
    stock.set('flavour', 0);

    let products = new Map();
    products.set('apple', {carbohydrate: 1, flavour: 2});
    products.set('coke', {carbohydrate: 10, flavour: 20});
    products.set('burger', {carbohydrate: 5, fat: 7, flavour: 3});
    products.set('omelet', {protein: 5, fat: 1, flavour: 1});
    products.set('cheverme', {protein: 10, carbohydrate: 10, fat: 10, flavour: 10});

    function prepare(product, quantity) {
        let toPrepare = products.get(product);

        for (let [k, v] of stock) {
            if (toPrepare[k]) {
                if (v < toPrepare[k] * quantity) {
                    return `Error: not enough ${k} in stock`;
                }
            }
        }

        for (let [k, v] of stock) {
            if (toPrepare[k]) {
                let temp = v - toPrepare[k] * quantity;
                stock.set(k, temp);
            }
        }

        return 'Success';
    }

    function restock(element, quantity) {
        let old = stock.get(element);
        stock.set(element, old + quantity);

        return 'Success';
    }

    function report() {
        return `protein=${stock.get('protein')} carbohydrate=${stock.get('carbohydrate')} fat=${stock.get('fat')} flavour=${stock.get('flavour')}`;
    }

    return function operate(input) {
        let tokens = input.split(' ');
        let command = tokens.shift();

        switch (command) {
            case 'prepare':
                return prepare(tokens[0], Number(tokens[1]));
            case 'restock':
                return restock(tokens[0], Number(tokens[1]));
            case 'report':
                return report();
        }
    }
})();

console.log(res('restock carbohydrate 10'));
console.log(res('restock flavour 10'));
console.log(res('prepare apple 1'));
console.log(res('restock fat 10'));
console.log(res('prepare burger 1'));
console.log(res('report'));
