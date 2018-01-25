function concatAndReverse(data) {
    let joined = data.join('');
    let temp = Array.from(joined);
    let reversedChars = temp.reverse();
    let reversedString = reversedChars.join('');

    return reversedString;
}

console.log(concatAndReverse(['I', 'am', 'a', 'student']));