function calcArea(wA, hA, wB, hB) {
    let [s1, s2, s3] = [wA*hA, wB*hB, Math.min(wA, wB)* Math.min(hA, hB)];

    let area = s1 + s2 - s3;

    return area;
}