function renderLogTemplate() {
    let source = $('#log-template').html();
    let template = Handlebars.compile(source);
    let main = $('main');

    let forms = [
        {
            viewId: "viewLogin",
            viewClass: "viewLogin",
            info: "Please login",
            formId: "formLogin",
            buttonId: "buttonLoginUser",
            buttonValue: "Login"
        },
        {
            viewId: "viewRegister",
            viewClass: "viewRegister",
            info: "Please register",
            formId: "formRegister",
            buttonId: "buttonRegisterUser",
            buttonValue: "Register"
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