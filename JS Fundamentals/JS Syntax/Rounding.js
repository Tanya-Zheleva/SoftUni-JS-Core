function round(data) {
    let [num, precision] = data;
    let denominator = Math.pow(10, precision);
    let result = Math.round(num * denominator) / denominator;

    console.log(result);
}