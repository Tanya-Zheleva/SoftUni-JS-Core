function solve(purchases) {
    let products = [];
    let sum = 0;

    for (let i = 0; i < purchases.length; i+=2) {
        let product = purchases[i];
        let price = Number(purchases[i + 1]);

        products.push(product);
        sum += price;
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${Math.round(sum * 100) / 100}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe Soup', '7.80']);