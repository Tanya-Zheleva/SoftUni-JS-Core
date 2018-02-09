function countOccurrences(text, word) {
    let pattern = `\\b(${word})\\b`;
    let regex = new RegExp(pattern, "gi");
    let match = regex.exec(text);
    let found = 0;

    while (match) {
        found++;
        match = regex.exec(text);
    }

    return found;
}

console.log(countOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the'));