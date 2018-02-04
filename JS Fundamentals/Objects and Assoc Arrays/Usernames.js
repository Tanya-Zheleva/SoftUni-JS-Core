function getUsernames(input) {
    let usernames = new Set();

    input.forEach(x => usernames.add(x));
    let sortedNames = Array.from(usernames).sort((a, b) => (sortSet(a, b)));

    for (let username of sortedNames) {
        console.log(username);
    }

    function sortSet(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.localeCompare(b);
    }
}

getUsernames(['Ashton',
              'Kutcher',
              'Ariel',
              'Lilly',
              'Keyden',
              'Aizen',
              'Billy',
              'Braston']);