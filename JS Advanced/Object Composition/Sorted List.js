function solve() {
    let list = (() => {
        return {
            elements: [],
            size: 0,
            add: function (n) {
                this.elements.push(n);
                this.size++;
                this.sort();
            },
            remove: function (index) {
                if (index > -1 && index < this.elements.length) {
                    this.elements.splice(index, 1);
                    this.size--;
                }
            },
            get: function (index) {
                if (index > -1 && index < this.elements.length) {
                    return this.elements[index];
                }
            },
            sort: function () {
                this.elements = this.elements.sort((a, b) => a - b);
            }
        };
    })();

    list.add(5);
    list.add(3);
    list.remove(0);
    console.log(list.get(0));
    console.log(list.size);
}

solve();