function parseData(input) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/;

    for (let token of input) {
        let match = regex.exec(token);

        if (match) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}

parseData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee']);