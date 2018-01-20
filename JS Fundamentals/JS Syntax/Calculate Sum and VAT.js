function calculateSumAndVat(data) {
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(`sum = ${sum}`)
    console.log(`vat = ${vat}`);
    console.log(`total = ${total}`)
}