function captureNumbers(input) {
    let found = [];
    let regex = new RegExp(/\d+/g);

    for (let token of input) {
        let match = regex.exec(token);

        while (match !== null) {
            found.push(match);

            match = regex.exec(token);
        }
    }

    console.log(found.join(' '));
}

captureNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);