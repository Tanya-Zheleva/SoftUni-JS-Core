function attachEvents() {
    $('#btnDelete').click(deleteTown);

    function deleteTown() {
        let input = $('#townName').val();
        let towns = $('#towns option').toArray();
        let hasTown = false;

        for (let town of towns) {
            if (town.textContent === input) {
                hasTown = true;
                $(town).remove();
                $('#result').text(`${input} deleted.`);
            }
        }

        if (!hasTown) {
            $('#result').text(`${input} not found.`);
        }

        $('#townName').val('');
    }
}