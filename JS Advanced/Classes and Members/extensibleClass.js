let result = (() => {
    let counter = 0;

    return class Extensible {
        constructor() {
            this.id = counter++;
            counter++;
        }

        extend(template) {
            for (let property in template) {
                if (template.hasOwnProperty(property)) {
                    let element = template[property];

                    if (typeof element === 'function') {
                        Object.getPrototypeOf(this)[property] = element;
                    } else {
                        this[property] = element;
                    }
                }
            }
        }
    }


})();