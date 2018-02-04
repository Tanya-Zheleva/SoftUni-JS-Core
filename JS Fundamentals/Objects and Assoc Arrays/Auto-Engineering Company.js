function solve(input) {
    let brands = new Map();

    for (let token of input) {
        let data = token.split(/\s*\|\s*/g);
        let brand = data[0];
        let model = data[1];
        let amount = Number(data[2]);


        if (!brands.has(brand)) {
            brands.set(brand, new Map());
            brands.get(brand).set(model, amount);
        } else {
            if (!brands.get(brand).get(model)) {
                brands.get(brand).set(model, amount);
            } else {
                let old =  brands.get(brand).get(model);
                brands.get(brand).set(model, old + amount);
            }
        }
    }

    for (let [brand, value] of brands) {
        console.log(brand);

        for (let [model, amount] of value) {
            console.log(`###${model} -> ${amount}`);
        }
    }
}

solve(['Mercedes-Benz | 50PS | 123',
       'Mini | Clubman | 20000',
       'Mini | Convertible | 1000',
       'Mercedes-Benz | 60PS | 3000',
       'Hyunday | Elantra GT | 20000',
       'Mini | Countryman | 100',
       'Mercedes-Benz | W210 | 100',
       'Mini | Clubman | 1000',
       'Mercedes-Benz | W163 | 200']);