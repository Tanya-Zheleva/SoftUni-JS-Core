function getExtensibleObject() {
    let obj = {
        extend: function (template) {
            for(let property in template) {
                if (template.hasOwnProperty(property)) {
                    let element = template[property];

                    if (typeof element === 'function') {
                        Object.getPrototypeOf(obj)[property] = element;
                    } else {
                        obj[property] = element;
                    }
                }
            }
        }
    };

    return obj;
}

let myObj = getExtensibleObject();
let template = {
    extensionMethod: function () {
        console.log('Test');
    },
    extensionProp: 'Temp'
};

myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));