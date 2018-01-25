function extract(text) {
    let start = text.indexOf('(');
    let results = [];

    while (start > -1) {
        let end = text.indexOf(')', start);

        if (end === -1) {
            break;
        }

        let extracted = text.substring(start + 1, end);
        results.push(extracted);

        start = text.indexOf('(', end);
    }

    return results.join(', ');
}

console.log(extract('Rakiya (Bulgarian brandy) is home-made liquor (alcoholic drink).'));