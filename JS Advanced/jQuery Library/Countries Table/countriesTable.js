function initializeTable() {
    $('#createLink').click(addCountry);

    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();

    function addCountry() {
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        createCountry(name, capital);
        fixLinks();
    }

    function createCountry(name, capital) {
        $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($('<td></td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(remove)))
            .appendTo($('#countriesTable'));
    }

    function fixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:nth-child(3) a:contains(Up)').hide();
    }
    
    function moveUp() {
        let prev = $(this).parent().parent().prev();
        $(this).parent().parent().insertBefore(prev);
        fixLinks();
    }

    function moveDown() {
        let next =  $(this).parent().parent().next();
        $(this).parent().parent().insertAfter(next);
        fixLinks();
    }

    function remove() {
        $(this).parent().parent().remove();
        fixLinks();
    }
}