function generateXml(data) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';

    for (let i = 0; i < data.length; i += 2) {
        let question = data[i];

        xml += '  <question>\n';
        xml += `    ${question}\n`;
        xml += '  </question>\n';

        let answer = data[i + 1];

        xml += '  <answer>\n';
        xml += `    ${answer}\n`;
        xml += '  </answer>\n';
    }

    xml += '</quiz>';

    return xml;
}