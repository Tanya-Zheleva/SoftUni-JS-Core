function hierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError('Cannot instance an abstract class!');
            }
        }

        get area() {
            return undefined;
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            let type = super.toString();

            return `${type} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            let type = super.toString();

            return `${type} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

let func = hierarchy();

//let f = new func.Figure(); //Error
let c = new func.Circle(5);
console.log(c.area); //78.53981633974483
console.log(c.toString()); //Circle - radius: 5
let r = new func.Rectangle(3, 4);
console.log(r.area); //12
console.log(r.toString()); //Rectangle - width: 3, height: 4