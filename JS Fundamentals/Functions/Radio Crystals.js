function solve(input) {
    let targetSize = input[0];

    for (let i = 1; i < input.length; i++) {
        let microns = input[i];
        console.log(`Processing chunk ${microns} microns`);

        microns = executeOperation(targetSize, microns, 'Cut', cut);
        microns = executeOperation(targetSize, microns, 'Lap', lap);
        microns = executeOperation(targetSize, microns, 'Grind', grind);
        microns = executeOperation(targetSize, microns, 'Etch', etch);

        if (microns + 1 === targetSize) {
            microns = xRay(microns);
        }

        console.log(`Finished crystal ${microns} microns`);
    }
}

function cut(crystal) {
    return crystal / 4;
}

function lap(crystal) {
    crystal -= crystal * 0.2;

    return crystal;
}

function grind(crystal) {
    crystal -= 20;

    return crystal;
}

function etch(crystal) {
    crystal -= 2;

    return crystal;
}

function xRay(crystal) {
    console.log('X-ray x1');

    return ++crystal;
}

function transportAndWash(crystal) {
    console.log('Transporting and washing');

    return Math.floor(crystal);
}

function executeOperation(targetSize, microns, operationString, operation) {
    let newSize = operation(microns);
    let counter = 0;

    while (newSize >= targetSize || Math.floor(targetSize - newSize) === 1) {
        microns = newSize;
        newSize = operation(microns);
        counter++;
    }

    if (counter > 0) {
        console.log(`${operationString} x${counter}`);
        microns = transportAndWash(microns);
    }

    return microns;
}

solve([1000, 4000, 8100]);