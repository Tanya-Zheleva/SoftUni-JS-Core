function generateDna(n) {
    let dnaTypes = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let shortDna = x => `**${x}**`;
    let midDna = x => `*${x[0]}--${x[1]}*`;
    let longDna = x => `${x[0]}----${x[1]}`;

    for (let i = 0; i < n; i++) {
         let temp = i % 4;
         let index = i % dnaTypes.length;
         let sequence = dnaTypes[index];

        switch (temp) {
            case 0:
                console.log(shortDna(sequence));
                break;
            case 1:
                console.log(midDna(sequence));
                break;
            case 2:
                console.log(longDna(sequence));
                break
            case 3:
                console.log(midDna(sequence));
                break;
        }
    }
}

generateDna(10);