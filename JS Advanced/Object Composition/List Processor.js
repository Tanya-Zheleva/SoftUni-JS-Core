function solve(input) {
    let processor = (() => {
        let tokens = [];

        return {
            add: (token) => tokens.push(token),
            remove: (token) => tokens = tokens.filter(x => x !== token),
            print: () => console.log(tokens)
        };
    })();

    for (let command of input) {
        let [action, argument] = command.split(' ');

        processor[action](argument);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);