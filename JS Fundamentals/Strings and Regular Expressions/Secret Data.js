function solve(input) {
    let usernamePattern = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)/gm;
    let phonePattern = /(\+[0-9-]{10})(?= |\t|$)/gm;
    let idPattern = /(![0-9a-zA-Z]+)(?= |\t|$)/gm;
    let basePattern = /(_[0-9a-zA-Z]+)(?= |\t|$)/gm;

    for (let token of input) {
        token = token
            .replace(usernamePattern, (match, name) => '|'.repeat(name.length))
            .replace(phonePattern, (match, phone) => '|'.repeat(phone.length))
            .replace(idPattern, (match, id) => '|'.repeat(id.length))
            .replace(basePattern, (match, base) => '|'.repeat(base.length));

        console.log(token);
    }
}