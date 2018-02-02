function count(input) {
    let stringArr = input.join('\n');
    let words = stringArr
        .split(/[\W]+/)
        .filter(x => x !== '');
    let found = {};

    for (let i = 0; i < words.length; i++) {
        let current = words[i];

        if (found[current] === undefined) {
            found[current] = 1;
        }
        else {
            found[current]++;
        }
    }

    console.log(JSON.stringify(found));
}

count(['JS devs use Node.js for server-side JS.-- JS for devs']);