function solve(data, fights) {
    let kingdoms = new Map();

    for (let token of data) {
        if (!kingdoms.has(token.kingdom)) {
            kingdoms.set(token.kingdom, new Map())
        }

        if (!kingdoms.get(token.kingdom).has(token.general)) {
            kingdoms.get(token.kingdom).set(token.general, {army: token.army, wins: 0, losses: 0});
        } else {
            kingdoms.get(token.kingdom).get(token.general).army += kingdoms.get(token.kingdom).get(token.general).army;
        }
    }

    for (let fight of fights) {
        let [attackKingdom, attackGeneral, defendKingdom, defendGeneral] = fight;

        if (attackKingdom !== defendKingdom) {
            let attackArmy = kingdoms.get(attackKingdom).get(attackGeneral).army;
            let defendArmy = kingdoms.get(defendKingdom).get(defendGeneral).army;

            if (attackArmy > defendArmy) {
                kingdoms.get(attackKingdom).get(attackGeneral).army += (attackArmy / 10);
                kingdoms.get(defendKingdom).get(defendGeneral).army -= (defendArmy / 10);

                kingdoms.get(attackKingdom).get(attackGeneral).wins++;
                kingdoms.get(defendKingdom).get(defendGeneral).losses++;
            }

            if (defendArmy > attackArmy) {
                kingdoms.get(attackKingdom).get(attackGeneral).army -= (attackArmy / 10);
                kingdoms.get(defendKingdom).get(defendGeneral).army += (defendArmy / 10);

                kingdoms.get(attackKingdom).get(attackGeneral).losses++;
                kingdoms.get(defendKingdom).get(defendGeneral).wins++;
            }

            kingdoms.get(attackKingdom).get(attackGeneral).army = Math.floor(kingdoms.get(attackKingdom).get(attackGeneral).army);
            kingdoms.get(defendKingdom).get(defendGeneral).army = Math.floor(kingdoms.get(defendKingdom).get(defendGeneral).army);
        }
    }

    let sortedKingdoms = [...kingdoms].sort((a, b) => {
        let firstWins = 0;
        let firstLosses = 0;
        let secondWins = 0;
        let secondLosses = 0;

        for (let [general, value] of a[1]) {
            firstWins += value.wins;
            firstLosses += value.losses;
        }

        for (let [general, value] of b[1]) {
            secondWins += value.wins;
            secondLosses += value.losses;
        }

        if (firstWins !== secondWins) {
            return secondWins - firstWins;
        }

        if (firstLosses !== secondLosses) {
            return firstLosses - secondLosses;
        }

        return a[0].localeCompare(b[0]);
    });

    let winningKingdom = sortedKingdoms[0];

    let sortedKingdom = [...winningKingdom[1]].sort((a, b) => {
        return b[1].army - a[1].army;
    });

    console.log(`Winner: ${winningKingdom[0]}`);

    for (let general of sortedKingdom) {
        console.log(`/\\general: ${general[0]}`);
        console.log(`---army: ${general[1].army}`);
        console.log(`---wins: ${general[1].wins}`);
        console.log(`---losses: ${general[1].losses}`);
    }
}

solve([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);