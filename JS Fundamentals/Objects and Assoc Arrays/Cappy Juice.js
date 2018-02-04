function solve(input) {
    let storedJuice = new Map();
    let storedBottles = new Map();

    for (let token of input) {
        let [type, value] = token.split(/\s*=>\s*/);
        let quantity = Number(value);

        if (!storedJuice.has(type)) {
            storedJuice.set(type, quantity);
        } else {
            let old = storedJuice.get(type);
            storedJuice.set(type, old + quantity);
        }

        let storedQuantity = storedJuice.get(type);

        if (storedQuantity >= 1000) {
            let bottles = Math.floor(storedQuantity / 1000);
            storedJuice.set(type, storedQuantity - bottles * 1000);

            if (!storedBottles.has(type)) {
                storedBottles.set(type, bottles);
            } else {
                let old = storedBottles.get(type);
                storedBottles.set(type, old + bottles);
            }
        }
    }

   for (let [type, quantity] of storedBottles) {
        console.log(`${type} => ${quantity}`);
   }
}

solve(['Orange => 2000',
       'Peach => 1432',
       'Banana => 450',
       'Peach => 600',
       'Strawberry => 549']);