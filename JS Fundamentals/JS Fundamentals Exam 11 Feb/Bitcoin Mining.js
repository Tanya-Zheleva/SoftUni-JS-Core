function solve(input) {
    let days = 1;
    let coins = 0;
    let money = 0;
    let purchaseDay = -1;
    let coinPrice = 11949.16;
    let goldPrice= 67.51;

    for (let gold of input) {
        gold = Number(gold);

        if (days % 3 === 0) {
            gold -= gold * 0.3;
        }

        let leva = gold * goldPrice;
        money += leva;

        if (money >= coinPrice) {
            let temp = Math.floor(money / coinPrice);
            coins += temp;
            money -= temp * coinPrice;

            if (purchaseDay === -1) {
                purchaseDay = days;
            }
        }

        days++;
    }

    console.log(`Bought bitcoins: ${coins}`);

    if (purchaseDay !== -1) {
        console.log(`Day of the first purchased bitcoin: ${purchaseDay}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([50, 100]);