function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            let regex = /^(\w+)melon$/;
            let element = this.constructor.name.match(regex)[1];

            return `Element: ${element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.morphStatus = 'Water';
        }

        morph() {
            switch (this.morphStatus) {
                case 'Water':
                    this.morphStatus = 'Fire';
                    break;
                case 'Fire':
                    this.morphStatus = 'Earth';
                    break;
                case 'Earth':
                    this.morphStatus = 'Air';
                    break;
                case 'Air':
                    this.morphStatus = 'Water';
                    break;
            }
        }

        toString() {
            return `Element: ${this.morphStatus}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };
}

let data = solve();
let melon = new data.Melolemonmelon(12.5, "Kingsize");
console.log(melon.toString());
melon.morph();
melon.morph();
melon.morph();
console.log(melon.toString());
