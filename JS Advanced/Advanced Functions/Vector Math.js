(() => {
    let add = ((vect1, vect2) => [vect1[0] + vect2[0], vect1[1] + vect2[1]]);
    let multiply = ((vector, scalar) => [vector[0] * scalar, vector[1] * scalar]);
    let length = (vector => Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]));
    let dot = ((vect1, vect2) => vect1[0] * vect2[0] + vect1[1] * vect2[1]);
    let cross = ((vect1, vect2) => vect1[0] * vect2[1] - vect1[1] * vect2[0]);

    return {add, multiply, length, dot, cross};
})();