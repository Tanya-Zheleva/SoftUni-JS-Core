function attachEvents() {
    $('ul').on('click', 'li', clickLi);

    function clickLi() {
        if ($(this).attr('data-selected')) {
            $(this).css('background', 'none');
            $(this).removeAttr('data-selected');
        } else {
            $(this).css('background', '#DDD');
            $(this).attr('data-selected', 'true');
        }
    }

    $('#showTownsButton').on('click', showTowns);

    function showTowns() {
        let selected = $('#items li[data-selected=true]')
            .toArray()
            .map(x => x.textContent);

        let result = `Selected towns: ${selected.join(', ')}`;
        $('#selectedTowns').text(result);
    }
}
