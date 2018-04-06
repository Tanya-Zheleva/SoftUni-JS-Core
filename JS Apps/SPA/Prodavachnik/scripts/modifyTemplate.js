function renderModifyTemplate() {
    let source = $('#modify-template').html();
    let template = Handlebars.compile(source);
    let main = $('main');

    let forms = [
        {
            viewType: "viewCreateAd",
            text: "Create new Advertisement",
            formType: "formCreateAd",
            buttonType: "buttonCreateAd",
            value: "Create"
        },
        {
            viewType: "viewEditAd",
            text: "Edit existing advertisement",
            formType: "formEditAd",
            buttonType: "buttonEditAd",
            value: "Edit"
        }
    ];

    renderTemplate();

    function renderTemplate() {
        for (let logForm of forms) {
            let html = template(logForm);
            main.append(html);
        }
    }
}