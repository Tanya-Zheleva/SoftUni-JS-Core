function censor(text, words) {
    for (let word of words) {
        let temp = '-'.repeat(word.length);

        while (text.indexOf(word) > - 1) {
            text = text.replace(word, temp);
        }
    }

    return text;
}

console.log(censor('roses are red, violets are blue', ['violets are', 'red']));