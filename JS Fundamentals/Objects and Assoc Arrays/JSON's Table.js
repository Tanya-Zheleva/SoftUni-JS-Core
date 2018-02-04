function createTable(input) {
    let result = '<table>\n';

    for (let token of input) {
        let parsed = JSON.parse(token);
        result += '\t<tr>\n';

        result += `\t\t<td>${escapeChars(parsed.name)}</td>\n`;
        result += `\t\t<td>${escapeChars(parsed.position)}</td>\n`;
        result += `\t\t<td>${Number(parsed.salary)}</td>\n`;

        result += '\t<tr>\n';
    }

    result += '</table>';
    console.log(result);

    function escapeChars(string) {
        let escaped = string.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gth')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        return escaped;
    }
}

createTable(['{"name":"Pesho","position":"Promenliva","salary":100000}']);