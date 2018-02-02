function convert(input) {
    let colsInfo = input[0]
        .split(/\s*\|\s*/g)
        .filter(x => x !== '');
    let data = input.slice(1);
    let towns = [];

    for (let token of data) {
        let [town, lat, long] = token
            .split(/\s*\|\s*/g)
            .filter(x => x !== '');

        let obj = {Town:town, Latitude:Number(lat), Longitude:Number(long)};
        towns.push(obj);
    }

    console.log(JSON.stringify(towns));
}

convert(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);