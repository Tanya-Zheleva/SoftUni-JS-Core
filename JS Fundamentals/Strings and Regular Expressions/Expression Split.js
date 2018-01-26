function split(text) {
    let pattern = /[\s;\\.,()]+/;
    text = text.split(pattern).filter(x => x !== '');

    text.forEach(x => console.log(x));
}

split('let sum = 4 * 4,b = "wow";');