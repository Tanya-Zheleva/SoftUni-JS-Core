function match(text) {
    let pattern = /\w+/g;
    let result = text.match(pattern).join('|');

    return result;
}

console.log(match('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));