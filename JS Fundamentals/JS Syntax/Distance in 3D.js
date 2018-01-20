function calculateDistance(data) {
    let point1 = {x: data[0], y: data[1], z: data[2]};
    let point2 = {x: data[3], y: data[4], z: data[5]};

    let temp = Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2) + Math.pow(point1.z - point2.z, 2);
    let diff = Math.sqrt(temp);

    console.log(diff);
}