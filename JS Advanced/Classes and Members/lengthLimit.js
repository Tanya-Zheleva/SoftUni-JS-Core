class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength >= length) {
            this.innerLength -= length;
        } else {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength < this.innerString.length) {
            let truncated = this.innerString.substring(0, this.innerLength) + '...';

            return truncated;
        }

        return this.innerString;
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test