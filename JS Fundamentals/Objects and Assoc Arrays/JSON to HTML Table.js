function convert(input) {
    let result = '<table>\n';
    result += '   <tr>';
    let stringArr = JSON.parse(input);
    let keys = Object.keys(stringArr[0]);

    for (let key of keys) {
        result += `<th>${key}</th>`;
    }

    result += '</tr>\n';

    for (let token of stringArr) {
        result += '   <tr>';

        for (let key of Object.keys(token)) {
            if (Number(token[key])) {
                result += `<td>${Number(token[key])}</td>`;
            } else {
                let escaped = escapeHtml(token[key]);
                result += `<td>${escaped}</td>`;
            }
        }

        result += '</tr>\n';
    }

    result += '</table>';
    console.log(result);

    function escapeHtml(string) {
        let escaped = string
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        return escaped;
    }
}

convert('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');