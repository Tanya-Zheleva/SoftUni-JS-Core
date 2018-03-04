function makeCard(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.some(x => x === face)) {
        throw new Error('Error');
    }

    if (!validSuits.some(x => x === suit)) {
        throw new Error('Error');
    }

    let suitSymbol = '';

    switch (suit) {
        case 'S':
            suitSymbol = '\u2660';
            break;
        case 'H':
            suitSymbol = '\u2665';
            break;
        case 'D':
            suitSymbol = '\u2666';
            break;
        case 'C':
            suitSymbol = '\u2663';
            break;
    }

    let card = `${face}${suitSymbol}`;

    return card;
}

console.log(makeCard(1, 'S'));
console.log(makeCard('A', 'S'));
console.log(makeCard('1', 'C'));