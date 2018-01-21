function modify(n) {
    n = n.toString();
    let average = getAverageDigitSum(n);

    while (average <= 5) {
        n += '9';
        average = getAverageDigitSum(n);
    }

    console.log(n);
}

function getAverageDigitSum(n) {
    let digitSum = 0;
    let digitCount = n.length;

    for (let i = 0; i < digitCount; i++) {
        digitSum += Number(n[i]);
    }

    return digitSum / digitCount;
}