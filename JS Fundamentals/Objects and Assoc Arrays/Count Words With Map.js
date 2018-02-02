function count(input) {
    let stringArr = input.join('\n');
    let tokens = stringArr
        .split(/\W+/g)
        .filter(x => x !== '')
        .map(x => x.toLowerCase());
    let words = new Map();

    for (let word of tokens) {
        if (!words.has(word)) {
            words.set(word, 1);
        }
        else {
            let old = words.get(word);
            words.set(word, old + 1);
        }
    }

    for (let [k, v] of [...words].sort()) {
        console.log(`\'${k}\' -> ${v} times`);
    }
}

count(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);