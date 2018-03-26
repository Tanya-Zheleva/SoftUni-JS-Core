function attachEvents() {
    const baseUrl = 'https://messenger-4beec.firebaseio.com/messenger';
    loadInfo();
    $('#submit').on('click', create);
    $('#refresh').on('click', refresh);

    function loadInfo() {
        let req = {
            url: baseUrl + '.json',
            success: displayInfo
        };

        $.ajax(req);
    }

    function refresh() {
        $('#author').val('');
        $('#content').val('');
    }

    function create() {
        let author = $('#author').val();
        let content = $('#content').val();

        let contact = {
            author,
            content,
            timestamp: Date.now()
        };

        let req = {
            url: baseUrl + '.json',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(contact),
            success: () => {
                $('#content').val('');
                loadInfo();
            }
        };

        $.ajax(req);
    }
    
    function displayInfo(data) {
        $('#messages').empty();
        let text = $('#messages').text();

        for (let info in data) {
            text += `${data[info].author}: ${data[info].content}\n`;
        }

        $('#messages').text(text);
    }
}