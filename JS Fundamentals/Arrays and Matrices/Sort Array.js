function sort(array) {
    array.sort((x, y) => {
        if (x.length !== y.length) {
            return x.length - y.length;
        }
        else if (x.toLowerCase() > y.toLowerCase()) {
            return 1;
        }
    });

    console.log(array.join('\n'));
}

sort(['test', 'Deny', 'omen', 'Default']);