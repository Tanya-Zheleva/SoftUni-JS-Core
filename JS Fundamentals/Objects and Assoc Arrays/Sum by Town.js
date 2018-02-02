function getTownSums(input) {
    let towns = {};

    for (let i = 0; i < input.length; i += 2) {
       let [town, income] = [input[i], Number(input[i + 1])];
        towns[town] === undefined ? towns[town] = income : towns[town] += income;
    }

    console.log(JSON.stringify(towns));
}

getTownSums(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);