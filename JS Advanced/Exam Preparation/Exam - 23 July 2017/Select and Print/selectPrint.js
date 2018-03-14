function move(command) {
    if (command === 'right') {
        let selectedTown = $('#available-towns :selected');
        $('#selected-towns').append($(`<option>${selectedTown.val()}</option>`));

        $('#available-towns :selected').remove();
    } else if (command === 'left') {
        let selectedTown = $('#selected-towns :selected');
        $('#available-towns').append($(`<option>${selectedTown.val()}</option>`));

        $('#selected-towns :selected').remove();
    } else if (command === 'print') {
        let towns = $('#selected-towns option').toArray();
        let result = [];
        towns.forEach(x => result.push(x.textContent));
        $('#output').text(result.join('; '));
    }
}