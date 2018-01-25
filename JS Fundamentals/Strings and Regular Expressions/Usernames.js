function parseUsernames(data) {
    let parsed = [];

    for (let email of data) {
        let [name, domain] = email.split('@');
        let result = name + '.';
        let domainTokens = domain.split('.');
        domainTokens.forEach(x => result += x[0]);

        parsed.push(result);
    }

    console.log(parsed.join(', '));
}

parseUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg']);