function extendPrototype(Class) {
    Class.prototype.species = 'Human';
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;

        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        let baseStr = super.toString().slice(0, -1);

        return baseStr + `, subject: ${this.subject})`;
    }
}

extendPrototype(Person);
let teacher = new Teacher('Ivan', 'i@i.com', 'Mathematics');
console.log(teacher.toSpeciesString());