function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let p1 = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    let p2 = new Person('SoftUni');
    let p3 = new Person('Stephan', 'Nikolov', 25);
    let p4 = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

    return [p1, p2, p3, p4]
}

console.log(getPersons());