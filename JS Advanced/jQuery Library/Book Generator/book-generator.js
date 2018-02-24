function createBook(selector, title, author, isbn) {
    let id = 1;

    let container = $(selector);
    let titleDiv = $('<div>')
        .attr('id', `book${id}`);

    $(`<p>${title}</p>`)
        .addClass('title')
        .appendTo(titleDiv);

    $(`<p>${author}</p>`)
        .addClass('author')
        .appendTo(titleDiv);

    $(`<p>${isbn}</p>`)
        .addClass('isbn')
        .appendTo(titleDiv);

    $('<button>Select</button>')
        .click(() => {
            titleDiv.css('border', '2px solid blue');
        })
        .appendTo(titleDiv);

    $('<button>Deselect</button>')
        .click(() => {
            titleDiv.css('border', '');
        })
        .appendTo(titleDiv);

    titleDiv.appendTo(container);
    id++;
}