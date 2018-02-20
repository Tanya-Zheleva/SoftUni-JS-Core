function extractText() {
    let result = [];
    $('#items li').toArray().forEach(x => result.push(x.textContent));
    $('#result').text(result.join(', '));
}