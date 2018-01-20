function checkPoint(data) {
    let [x, y, xMin, xMax, yMin, yMax] = data;

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside')
    } else {
        console.log('outside');
    }
}