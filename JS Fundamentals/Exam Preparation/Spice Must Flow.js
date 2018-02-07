function solve(input) {
    let startingYield = Number(input);
    let spice = 0;
    let days = 0;

    while (startingYield >= 100) {
        spice += startingYield;

        if (spice >= 26) {
            spice -= 26;
        }

        startingYield -= 10;
        days++;
    }

    if (spice >= 26) {
        spice -= 26;
    }

    console.log(days);
    console.log(spice);
}

solve(200);