function solve() {
    let currentStation = '';
    let nextStationId = 'depot';

    function depart() {
        if ($("#arrive").attr('disabled')) {
            let url = `https://judgetests.firebaseio.com/schedule/${nextStationId}.json`;

            let req = {
                url: url,
                success: displayStation,
                error: displayError
            };

            $.ajax(req);
            $("#arrive").attr('disabled', false);
            $("#depart").attr('disabled', true);
        }
    }

    function arrive() {
        if ($('#depart').attr('disabled')) {
            $('#info .info').text(`Arriving at ${currentStation}`);

            $("#arrive").attr('disabled', true);
            $("#depart").attr('disabled', false);
        }
    }

    function displayStation(data) {
        $('#info .info').text(`Next stop ${data.name}`);
        currentStation = data.name;
        nextStationId = data.next;
    }

    function displayError(err) {
        $('#info .info').text(`Error`);
        $("#arrive").attr('disabled', true);
        $("#depart").attr('disabled', true);
    }

    return {
        depart,
        arrive
    };
}