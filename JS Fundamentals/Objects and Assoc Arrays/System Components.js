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

    let sortedSystems = [...systems.keys()].sort((a, b) => sortSystems(a, b));

    for (let systemKey of sortedSystems) {
        console.log(systemKey);
        let sortedComponents = [...systems.get(systemKey).keys()].sort((a, b) => sortComponents(systemKey, a, b));

        for (let componentKey of sortedComponents) {
            console.log(`|||${componentKey}`);
            systems.get(systemKey).get(componentKey).forEach(x => console.log(`||||||${x}`));
        }
    }

    function sortSystems(a, b) {
        if (systems.get(a).size !== systems.get(b).size) {
            return systems.get(b).size - systems.get(a).size;
        }

        return a > b;
    }

    function sortComponents(systemKey, a, b) {
        return systems.get(systemKey).get(b).length - systems.get(systemKey).get(a).length;
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