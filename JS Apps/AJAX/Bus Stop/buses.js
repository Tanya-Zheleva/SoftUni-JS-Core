function getInfo() {
    let stopId = $('#stopId').val();
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    let req = {
        url: url,
        success: displayBuses,
        error: displayError
    };

    $.ajax(req);

    function displayBuses(data) {
        $('#buses').empty();
         $('#stopName').text(data.name);

        for (let bus in data.buses) {
            let li = $(`<li>Bus ${bus} arrives in ${data.buses[bus]} minutes</li>`);
             $('#buses').append(li);
        }
    }

    function displayError(err) {
        $('#buses').empty();
        $('#stopName').text('Error');
    }
}