function getShortestTrip(values) {
    let distance12 = calculateDistance(values[0], values[1], values[2], values[3]);
    let distance13 = calculateDistance(values[0], values[1], values[4], values[5]);
    let distance23 = calculateDistance(values[2], values[3], values[4], values[5]);

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: ' + b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
}

function calculateDistance(x1, y1, x2, y2) {
    let temp = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return temp;
}

getShortestTrip([0, 0, 2, 0, 4, 0])