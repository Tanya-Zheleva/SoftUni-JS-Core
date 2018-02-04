function solve(input) {
    let systems = new Map();

    for (let token of input) {
        let [system, component, subcomponent] = token.split(/\s*\|\s/g);

        if (!systems.has(system)) {
            systems.set(system, new Map());
            systems.get(system).set(component, []);
        } else {
            if (!systems.get(system).has(component)) {
                systems.get(system).set(component, []);
            }
        }

        systems.get(system).get(component).push(subcomponent);
    }

    let systemKeys = Array.from(systems.keys())
    let systemsArr = [];

    for (let key of systemKeys) {
        let componentsKeys = Array.from(systems.get(key).keys());

        let system = {
            name: key,
            components: []
        };

        for (let componentKey of componentsKeys) {
            let component = {
                name: componentKey,
                subcomponents: systems.get(key).get(componentKey)
            };

            system.components.push(component);
        }

        systemsArr.push(system);
    }

    systemsArr = systemsArr.sort((a, b) =>  {
        if (a.components.length !== b.components.length) {
            return b.components.length - a.components.length;
        }

        return a.name > b.name;
    });

    for (let system of systemsArr) {
        console.log(system.name);

        for (let component of system.components.sort((a, b) => b.subcomponents.length - a.subcomponents.length)) {
            console.log(`|||${component.name}`)

            component.subcomponents.forEach(x => console.log(`||||||${x}`));
        }
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);