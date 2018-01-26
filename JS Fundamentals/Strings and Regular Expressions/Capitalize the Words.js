function capitalize(text) {
    let capitalized = [];
    text = text.split(' ')
        .filter(x => x !== '')
        .map(x => x.trim());

    text.forEach(x => capitalized.push(x[0].toUpperCase() + x.substr(1).toLowerCase()));
    console.log(capitalized.join(' '));
}

capitalize('Was that Easy? tRY thIs onE for SiZe!');