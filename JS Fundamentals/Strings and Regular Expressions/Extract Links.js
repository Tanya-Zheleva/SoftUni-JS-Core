function extractLinks(input) {
    let pattern = /(?:www\.[A-Za-z0-9-]+(?:\.[a-z]+)+)/g;
    let regex = new RegExp(pattern);
    let found = [];

    for (let token of input) {
        let match = regex.exec(token);

        while (match) {
            found.push(match);
            match = regex.exec(token);
        }
    }

    console.log(found.join('\n'));
}

extractLinks(['Join WebStars now for free, at www.web-stars.com']);