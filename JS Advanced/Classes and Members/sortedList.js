class SortedList {
    constructor() {
        this.elements = [];
        this.size = 0;
    }

    add(n) {
        this.elements.push(n);
        this.size++;
        this.sort();
    }

    remove(index) {
        if (index > -1 && index < this.elements.length) {
            this.elements.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index > -1 && index < this.elements.length) {
            return this.elements[index];
        }
    }

    sort() {
        this.elements = this.elements.sort((a, b) => a - b);
    }
}

let list = new SortedList();
list.add(5);
list.add(2);
list.add(1);
console.log(list.size);;