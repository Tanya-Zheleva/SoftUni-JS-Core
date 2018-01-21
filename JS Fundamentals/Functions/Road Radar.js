function checkSpeed(input) {
    let [speed, area] = input;
    let areas = {motorway : 130, interstate: 90, city: 50, residential: 20};
    let allowed = areas[area];
    let result = '';

    if (speed <= allowed) {
        result = '';
    }
    else {
        if (speed - allowed <= 20) {
            result = 'speeding';
        }
        else if (speed - allowed <= 40) {
            result = 'excessive speeding';
        }
        else {
            result = 'reckless driving';
        }
    }

    return result;
}

console.log(checkSpeed([21, 'residential']));