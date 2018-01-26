function split(text, delimiter) {
    text = text.split(delimiter).filter(x => x !== '').map(x => x.trim());

    console.log(text.join('\n'));
}

split('One-Two- Three-Four- Five', '-');