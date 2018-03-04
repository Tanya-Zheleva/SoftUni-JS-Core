(function solve() {
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return this.replace(/^/, `${str}`);
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this.replace(/$/, `${str}`);
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        let lastIndex = this.substring(0, n - 2).lastIndexOf(' ');

        if (lastIndex !== -1) {
            return `${this.substring(0, lastIndex)}...`;
        } else {
            return `${this.substring(0, n - 3)}...`;
        }
    };

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            let index = str.indexOf(`{${i}`);

            while (index !== -1) {
                str = str.replace(`{${i}}`, params[i]);
                index = str.indexOf(`{${i}`);
            }
        }

        return str;
    };
})();

let str = 'my string';
str = str.ensureEnd('my');
console.log(str);
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);


