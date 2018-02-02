function convert(input) {
    let result = '<table>\n';
    result += '<tr><th>name</th><th>score</th></tr>\n';
    let tokens = JSON.parse(input);

    for (let obj of tokens) {
        let escapedName = escapeHtml(obj['name']);
        result += `   <tr><td>${escapedName}</td><td>${obj['score']}</td></tr>\n`;
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

convert([{"name":"Pencho Penchev","score":0},{"name":"<script>alert(\"Wrong!\")</script>","score":1}]);