function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(x => x != '');

    return words.join(', ');

    function extractWords() {
        return strUpper.split(/\W+/);
    }
}