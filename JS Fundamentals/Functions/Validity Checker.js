function checkPoints(input) {
    let [x1, y1, x2, y2] = input;
    let pointOne = {x: x1, y: y1};
    let pointTwo = {x: x2, y: y2};
    let center = {x: 0, y: 0};

    let pointOneToCenter = calculateDistance(pointOne, center);
    let pointTwoToCenter = calculateDistance(pointTwo, center);
    let pointOneToPointTwo = calculateDistance(pointOne, pointTwo);

    console.log(`{${pointOne.x}, ${pointOne.y}} to {${center.x}, ${center.y}} is ${checkIfInt(pointOneToCenter)}`);
    console.log(`{${pointTwo.x}, ${pointTwo.y}} to {${center.x}, ${center.y}} is ${checkIfInt(pointTwoToCenter)}`);
    console.log(`{${pointOne.x}, ${pointOne.y}} to {${pointTwo.x}, ${pointTwo.y}} is ${checkIfInt(pointOneToPointTwo)}`);
}

function checkIfInt(distance) {
    if (Number.isInteger(distance)) {
        return 'valid'
    }

    return 'invalid'
}

function calculateDistance(firstPoint, secondPoint) {
    let temp = Math.pow(secondPoint.x - firstPoint.x, 2) + Math.pow(secondPoint.y - firstPoint.y, 2);
    let result = Math.sqrt(temp);

    return result;
}

checkPoints([2, 1, 1, 1]);