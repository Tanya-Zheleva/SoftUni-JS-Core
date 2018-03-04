function printDeckOfCards(cards) {
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

    let resultCards = [];

    for (let card of cards) {
        let suit = card[card.length - 1];
        let face = card.substring(0, card.length - 1);

        try {
            let currentCard = makeCard(face, suit);
            resultCards.push(currentCard);
        } catch (ex) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(resultCards.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);