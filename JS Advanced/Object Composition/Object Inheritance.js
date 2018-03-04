function commandParser(commands) {
    let processor = (() => {
        let objects = new Map();

        function create(name, inherits, parent) {
           if (inherits) {
               let child = Object.create(objects.get(parent));
               objects.set(name, child);
           } else {
               objects.set(name, {});
           }
        }

        function set(name, property, value) {
            let temp = objects.get(name);
            temp[property] = value;
            objects.set(name, temp);
        }

        function print(name) {
            let current = objects.get(name);
            let properties = [];

            for (let prop in current) {
                let result = `${prop}:${current[prop]}`;
                properties.push(result);
            }

            console.log(properties.join(', '));
        }

        return {create, set, print};
    })();

    for (let command of commands) {
        let [cmd, name, action, value] = command.split(' ');
        processor[cmd](name, action, value);
    }
}

commandParser(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']);

