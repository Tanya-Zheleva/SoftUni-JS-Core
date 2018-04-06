function attachEvents() {
    $('#btnLoadTowns').on('click', loadData);
    let source = $('#towns-template').html();
    let template = Handlebars.compile(source);
    let towns = $('#towns');
    let root = $('#root');

    function loadData() {
        let names = towns.val();
        let html = '';

        if (names.length === 0) {
            html = '<i>(No towns to display)</i>';
        } else {
            if ($('#root:has(i)')) {
                root.empty();
            }

            let townsArr = names.split(', ');
            let context = {towns: townsArr};
            html = template(context);

            towns.val('');
        }

        root.append(html);
    }
}