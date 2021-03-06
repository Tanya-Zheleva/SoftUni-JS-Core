class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if (value) {
            this.element.find('.title').addClass('online');
        } else {
            this.element.find('.title').removeClass('online');
        }

        this._online = value;
    }

    render(id) {
        let container = $(`#${id}`);
        container.append(this.element);
    }

    createElement() {
        let article = $('<article>');
        let title = $(`<div>${this.firstName} ${this.lastName}</div>`).addClass('title');
        let button = $('<button>&#8505;</button>').click(() => {
            info.toggle();
        });

        let info = $('<div>').addClass('info').css('display', 'none');
        let phone = $(`<span>&phone; ${this.phone}</span>`);
        let email = $(`<span>&#9993; ${this.email}</span>`);

        title.append(button);
        info.append(phone);
        info.append(email);

        article.append(title);
        article.append(info);

        return article;
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
