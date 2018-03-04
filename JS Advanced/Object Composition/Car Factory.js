function solve(carInfo) {
    let car = {model: carInfo.model};
    let carriage = {type: carInfo.carriage, color: carInfo.color};

    let engines = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    };

    let engineKey = Object.keys(engines).find(x => engines[x].power >= carInfo.power);
    car.engine = {power: engines[engineKey].power, volume: engines[engineKey].volume};

    let neededWheelsize = Math.trunc(carInfo.wheelsize);

    if (neededWheelsize % 2 === 0) {
        neededWheelsize--;
    }

    car.carriage = carriage;
    car.wheels = [neededWheelsize, neededWheelsize, neededWheelsize, neededWheelsize];

    return car;
}

console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));