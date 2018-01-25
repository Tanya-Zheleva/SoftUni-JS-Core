function escape(data) {
    let result = '<ul>\n';

    for (let token of data) {
        token = token.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39');

        result += `  <li>${token}</li>\n`;
    }

    result += '</ul>';

    return result;
}

console.log(escape(['<b>unescaped text</b>', 'normal text']));