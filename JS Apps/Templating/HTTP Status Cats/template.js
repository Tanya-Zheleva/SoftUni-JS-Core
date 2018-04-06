$(() => {
    let source = $('#cat-template').html();
    let template = Handlebars.compile(source);
    let allCats = $('#allCats');

    let context = {
        cats: window.cats
    };

    renderCatTemplate();

    function renderCatTemplate() {
        let html = template(context);
        allCats.append(html);
    }

    $('.card-block').find('button').on('click', toggleStatus);

    function toggleStatus() {
        $(this).parent().find('div').toggle();
        let text = $(this).html();

        if (text === 'Show status code') {
            $(this).html('Hide status code');
        } else {
            $(this).html('Show status code');
        }
    }
});
