let solve = (() => {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!Card.validFaces().includes(face)) {
                throw new Error();
            }

            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            let suits = Object.keys(Suits).map(x => Suits[x]);

            if (!suits.includes(suit)) {
                throw new Error();
            }

            this._suit = suit;
        }

        static validFaces() {
            return ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        }

        toString() {
            return `${this.face}${this.suit}`;
        }
    }

    return {Suits, Card};
})();

let card = new solve.Card('2', solve.Suits.CLUBS);
console.log(card.toString());