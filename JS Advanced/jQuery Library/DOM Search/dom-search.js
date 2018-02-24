function domSearch(selector, caseSensitive) {
    let content = $(selector).addClass('items-control');
    let controlsDiv = $('<div>').addClass('add-controls');

    controlsDiv.append($('<label>Enter text: </label>')
        .append($('<input>'))
        .append($('<a>Add</a>')
            .css('display', 'inline-block')
            .addClass('button')));

    let searchDiv = $('<div>').addClass('search-controls');
    searchDiv.append($('<label>Search: </label>').append($('<input>')));

    let resultDiv = $('<div>').addClass('result-controls');
    resultDiv.append($('<ul>').addClass('items-list'));

    controlsDiv.appendTo(content);
    searchDiv.appendTo(content);
    resultDiv.appendTo(content);

    $('.add-controls').find('a').click(addItem);

    function addItem() {
        let item = $('.add-controls').find('input').val();
        $('.result-controls').find('ul')
            .append($('<li>').addClass('list-item')
                .append($('<a>X</a>').addClass('button').click(deleteItem))
                .append($(`<strong>${item}</strong>`)));
    }

    $('.search-controls').change(function () {
        let searchValue = $('.search-controls').find('input').val();
        let items = $('.list-item').toArray();

        for (let item of items) {
            if (caseSensitive) {
                if (!item.textContent.includes(searchValue)) {
                    $(item).css('display', 'none');
                }
            } else {
                if (!item.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
                    $(item).css('display', 'none');
                }
            }
        }
    });

    function deleteItem() {
        $(this).parent().remove();
    }
}