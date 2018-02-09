function solve(input) {
    let key = input[0];
    let pattern = `((?: |^)`;

    for (let i = 0; i < key.length; i++) {
        pattern += "[" + key[i].toLowerCase() + key.toUpperCase() + "]";
    }

    pattern += "[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)";
    let regex = new RegExp(pattern, "g");

    for (let i = 1; i < input.length; i++) {
        let text = input[i];
        let replaced = text.replace(regex, (match, g1, g2, g3) => replace(match, g1, g2, g3));
        console.log(replaced);
    }

    function replace(match, g1, g2, g3) {
        g2 = g2.replace(/!/g, '1')
            .replace(/%/g, '2')
            .replace(/#/g, '3')
            .replace(/\$/g, '4')
            .replace(/([A-Z])/g, x => x.toLowerCase());

        return g1 + g2 + g3;
    }
}

solve(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);