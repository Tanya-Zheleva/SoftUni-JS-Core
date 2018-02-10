function solve(input) {
    let planes = new Set();
    let towns = new Map();

    for (let token of input) {
        let [planeId, town, passengers, action] = token.split(/\s/g);
        passengers = Number(passengers);

        if (action === 'depart') {
            if (planes.has(planeId)) {
                planes.delete(planeId);

                if (!towns.has(town)) {
                    towns.set(town, {arrivals: 0, departures: 0, planes: new Set()});
                }

                towns.get(town).departures += passengers;
                towns.get(town).planes.add(planeId);
            }
        }

        if (action === 'land') {
            if (!planes.has(planeId)) {
                planes.add(planeId);

                if (!towns.has(town)) {
                    towns.set(town, {arrivals: 0, departures: 0, planes: new Set()});
                }

                towns.get(town).arrivals += passengers;
                towns.get(town).planes.add(planeId);
            }
        }
    }

    let sortedPlanes = [...planes].sort((a, b) => {
        return a.localeCompare(b);
    });

    console.log('Planes left:');
    for (let plane of sortedPlanes) {
        console.log(`- ${plane}`);
    }

    let sortedTowns = [...towns].sort((a, b) => {
        let firstArrivals = a[1].arrivals;
        let secondArrivals = b[1].arrivals;

        if (firstArrivals !== secondArrivals) {
            return secondArrivals - firstArrivals;
        }

        return a[0].localeCompare(b[0]);
    });

    for (let town of sortedTowns) {
        console.log(town[0]);
        console.log(`Arrivals: ${town[1].arrivals}`);
        console.log(`Departures: ${town[1].departures}`);
        console.log('Planes:');

        let townPlanes = town[1].planes;
        [...townPlanes].sort((a, b) => a.localeCompare(b))
            .forEach(x => console.log(`-- ${x}`));
    }
}

solve(['Boeing474 Madrid 300 land',
    'AirForceOne WashingtonDC 178 land',
    'Airbus London 265 depart',
    'ATR72 WashingtonDC 272 land',
    'ATR72 Madrid 135 depart']);
