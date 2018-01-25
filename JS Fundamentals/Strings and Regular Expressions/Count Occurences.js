function countOccurences(searchVal, text) {
    let count = 0;
    let index = text.indexOf(searchVal);

    while (index > -1) {
        count++;
        index = text.indexOf(searchVal, index + 1);
    }

    return count;
}

console.log(countOccurences('the', 'the quick brown fox jumps over the lazy dog'));