function attachEvents() {
    $('a.button').click(buttonClicked);

    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}