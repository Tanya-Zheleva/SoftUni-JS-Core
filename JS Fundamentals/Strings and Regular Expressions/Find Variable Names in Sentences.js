function find(string) {
    let regex = new RegExp(/\b_([A-Za-z0-9]+)\b/g);
    let match = regex.exec(string);
    let found = [];

    while (match) {
        found.push(match[1]);
        match = regex.exec(string);
    }

    console.log(found.join(','));
}

find('__invalidVariable _evenMoreInvalidVariable_ _validVariable');