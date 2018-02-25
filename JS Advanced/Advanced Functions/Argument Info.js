function result() {
    let summary = new Map();

    for (let arg of arguments) {
        let type = typeof arg;

        if (!summary.has(type)) {
            summary.set(type, 1);
        } else {
            let old = summary.get(type);
            summary.set(type, old + 1);
        }

        console.log(`${type}: ${arg}`);
    }

    let sorted = [...summary].sort((a, b) => {
        return b[1] - a[1];
    });

    sorted.forEach(x => console.log(`${x[0]} = ${x[1]}`));
}

result('cat', 42, function () { console.log('Hello world!'); });