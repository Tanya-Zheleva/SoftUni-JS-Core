function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(data, initVal, func) {
        let val = initVal;

        for (let i = 0; i < data.length; i++) {
            val = func(val, data[i]);
        }

        console.log(val);
    }
}