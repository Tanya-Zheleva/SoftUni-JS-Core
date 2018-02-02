function countPopulation(input) {
    let towns = new Map();

    for (let token of input) {
        let [town, population] = token.split(' <-> ');

        if (!towns.has(town)) {
            towns.set(town, Number(population));
        } else {
            let old = towns.get(town);
            towns.set(town, old + Number(population));
        }
    }

    for (let [k, v] of towns) {
        console.log(`${k} : ${v}`);
    }
}

countPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000']);