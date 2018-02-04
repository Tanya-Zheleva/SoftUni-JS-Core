function getInventory(input) {
    let summary = [];

    for (let token of input) {
        let data = token.split(/\s*\/\s*/g);
        let name = data[0];
        let level = Number(data[1]);
        let items = [];

        if (data.length > 2) {
            items = data[2].split(/,\s*/g);
        }

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        summary.push(hero);
    }

    console.log(JSON.stringify(summary));
}

getInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);