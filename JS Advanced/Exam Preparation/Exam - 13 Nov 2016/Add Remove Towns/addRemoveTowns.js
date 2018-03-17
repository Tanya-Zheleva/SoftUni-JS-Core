function attachEvents() {
    $('#btnDelete').click(deleteTown);
    $('#btnAdd').click(addTown);

    function addTown() {
        let town = $('#newItem').val();

        if (town !== '') {
            let townOption = $(`<option>${town}</option>`);
            $('#towns').append(townOption);
            $('#newItem').val('');
        }
    }

    function deleteTown() {
        $('#towns :selected').remove();
    }
}