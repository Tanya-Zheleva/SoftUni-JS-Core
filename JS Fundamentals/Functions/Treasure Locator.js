function locate(input) {
    let islandNotFound = 'On the bottom of the ocean';
    let tongaIsland = {name: 'Tonga', xMin: 0, xMax: 2, yMin: 6, yMax: 8};
    let tuvaluIsland = {name: 'Tuvalu', xMin: 1, xMax: 3, yMin: 1, yMax: 3};
    let tokelauIsland = {name: 'Tokelau', xMin: 8, xMax: 9, yMin: 0, yMax: 1};
    let samoaIsland = {name: 'Samoa', xMin: 5, xMax: 7, yMin: 3, yMax: 6};
    let cookIsland = {name: 'Cook', xMin: 4, xMax: 9, yMin: 7, yMax: 8};

    let results = [];

    for (var i = 0; i < input.length; i += 2) {
        let point = {x: input[i], y: input[i + 1]};

        results.push(checkIsland(tongaIsland, point));
        results.push(checkIsland(tuvaluIsland, point));
        results.push(checkIsland(tokelauIsland, point));
        results.push(checkIsland(samoaIsland, point));
        results.push(checkIsland(cookIsland, point));

        if (results.some(x => x !== islandNotFound)) {
            let island = results.filter(x => x !== islandNotFound);

            console.log(island.join(' '));
        }
        else {
            console.log(islandNotFound);
        }

        results = [];
    }
}

function checkIsland(island, point) {
    if (point.x >= island.xMin && point.x <= island.xMax && point.y >= island.yMin && point.y <= island.yMax) {
        return island.name;
    }

    return 'On the bottom of the ocean';
}

locate([4, 2, 1.5, 6.5, 1, 3]);