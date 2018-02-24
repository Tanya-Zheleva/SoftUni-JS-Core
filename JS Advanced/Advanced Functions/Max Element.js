function getMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(getMax([5, 3, 2, 6]));