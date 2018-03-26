function attachEvents() {
    const baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';
    const list = $('#phonebook');
    $('#btnCreate').on('click', create);
    $('#btnLoad').on('click', loadContacts);

    function loadContacts() {
        let req = {
            url: baseUrl + '.json',
            success: displayContacts
        };

        $.ajax(req);
    }

    function create() {
        let person = $('#person').val();
        let phone = $('#phone').val();

        if (person.length !== 0 && phone.length !== 0) {
            $('#btnCreate').prop('disabled', true);

            let contact = {
                person,
                phone
            };

            let req = {
                url: baseUrl + '.json',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(contact),
                success: () => {
                    $('#person').val('');
                    $('#phone').val('');
                    loadContacts();
                },
                complete: () => $('#btnCreate').prop('disabled', false)
            };

            $.ajax(req);
        }
    }

    function displayContacts(data) {
        list.empty();

        for (let contact in data) {
            let html = $(`<li><span>${data[contact].person}: ${data[contact].phone}</span> </li>`);
            html.append($(`<button>Delete</button>`).on('click', () => deleteContact(contact)));
            list.append(html);
        }
    }

    function deleteContact(contact) {
        let req = {
            url: `${baseUrl}/${contact}.json`,
            method: 'DELETE',
            success: () => {
                loadContacts();
            }
        };

        $.ajax(req);
    }
}