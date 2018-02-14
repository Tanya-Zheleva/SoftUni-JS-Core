function solve(arrayMap, forces) {
    let map = [];

    for (let row of arrayMap) {
        row = row.split(/\s/g).map(Number);
        map.push(row);
    }

    for (let force of forces) {
        let [type, index] = force.split(/\s/);
        index = Number(index);

        switch (type) {
            case 'breeze':
                if (isValid(index)) {
                    for (let col = 0; col < map[0].length; col++) {
                        if (map[index][col] >= 15) {
                            map[index][col] -= 15;
                        }
                    }
                }
                break;
            case 'gale':
                if (isValid(index)) {
                    for (let row = 0; row < map.length; row++) {
                        if (map[row][index] >= 20) {
                            map[row][index] -= 20;
                        }
                    }
                }
                break;
            case 'smog':
                for (let row = 0; row < map.length; row++) {
                    for (let col = 0; col < map[0].length; col++) {
                        map[row][col] += index;
                    }
                }
                break;
        }
    }

    let result = [];

    if (hasPollutedAreas()) {
        for (let row = 0; row < map.length; row++) {
            for (let col = 0; col < map[0].length; col++) {
                if (map[row][col] >= 50) {
                    let obj = `[${row}-${col}]`;
                    result.push(obj);
                }
            }
        }

        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }

    function hasPollutedAreas() {
        for (let row = 0; row < map.length; row++) {
            for (let col = 0; col < map[0].length; col++) {
                if (map[row][col] >= 50) {
                    return true;
                }
            }
        }

        return false;
    }

    function isValid(value) {
        if (value > -1 && value < 5) {
            return true;
        }

        return false;
    }
}

solve(["5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]);