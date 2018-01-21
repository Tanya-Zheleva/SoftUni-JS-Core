function chaeck(data) {
    for (let i = 0; i < data.length; i += 3) {
        let point = {x: data[i], y: data[i + 1], z: data[i + 2]};

        let result = inVolume(point) ? 'inside' : 'outside';

        console.log(result);
    }
}

function inVolume(point) {
    let x1 = 10, x2 = 50;
    let y1 = 20, y2 = 80;
    let z1 = 15, z2 = 50;

    let isInside = (point.x >= x1 && point.x <= x2) &&
        (point.y >= y1 && point.y <= y2) &&
        (point.z >= z1 && point.z <= z2);

    if (isInside) {
        return true;
    }

    return false;
}