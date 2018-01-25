function aggregate(data) {
    let towns = [];
    let sum = 0;

    for (let element of data) {
        let start = element.indexOf('|');
        let end = element.lastIndexOf('|');

        let town = element.substring(start + 1, end).trim();
        let value = Number(element.substr(end + 1));

        towns.push(town);
        sum += value;
    }

    console.log(`${towns.join(', ')}\n${sum}`);
}

aggregate(['| Sofia           | 300']);