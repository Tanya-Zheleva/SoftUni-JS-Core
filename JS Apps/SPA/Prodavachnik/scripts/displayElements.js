function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}

function showHideLinks() {
    $('#linkHome').show();

    if (sessionStorage.getItem('authToken') === null) {
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
        $('#loggedInUser').text('');
    } else {
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
        $('#loggedInUser').text("Welcome, " + sessionStorage.getItem('username') + "!").show();
    }
}

function showInfo(message) {
    let infoBox = $('#infoBox');
    infoBox.text(message);
    infoBox.show();
    setTimeout(function() {
        $('#infoBox').fadeOut()
    }, 3000)
}

function showError(errorMsg) {
    let errorBox = $('#errorBox');
    errorBox.text("Error: " + errorMsg);
    errorBox.show();
}

function showHomeView() {
    showView('viewHome')
}

function showLoginView() {
    showView('viewLogin');
    $('#viewLogin').empty();
    $('#formLogin').trigger('reset');
    
    async function load() {
        let login = await $.get('./templates/register-login.hbs');
        let template = Handlebars.compile(login);
        let context =  {
                info: "Please login",
                formId: "formLogin",
                buttonId: "buttonLoginUser",
                buttonValue: "Login"
            };

        let html = template(context);
        $('#viewLogin').append(html);
        $('#buttonLoginUser').on('click', loginUser);
    }

    load();
}

function showRegisterView() {
    showView('viewRegister');
    $('#viewRegister').empty();
    $('#formRegister').trigger('reset');

    async function load() {
        let register = await $.get('./templates/register-login.hbs');
        let template = Handlebars.compile(register);
        let context =  {
            info: "Please register",
            formId: "formRegister",
            buttonId: "buttonRegisterUser",
            buttonValue: "Register"
        };

        let html = template(context);
        $('#viewRegister').append(html);
        $('#buttonRegisterUser').on('click', registerUser);
    }

    load();
}

function showCreateAdView() {
    showView('viewCreateAd');
    $('#viewCreateAd').empty();
    $('#formCreateAd').trigger('reset');

    async function load() {
        let create = await $.get('./templates/create-edit.hbs');
        let template = Handlebars.compile(create);
        let context =  {
            text: "Create new Advertisement",
            formType: "formCreateAd",
            buttonType: "buttonCreateAd",
            value: "Create"
        };

        let html = template(context);
        $('#viewCreateAd').append(html);
        $('#buttonCreateAd').on('click', createAd);
    }

    load();
}

function showListAdsView() {
    showView('viewAds');
}

async function showEditAdView() {
    showView('viewEditAd');
    $('#viewEditAd').empty();

    async function load() {
        let edit = await $.get('./templates/create-edit.hbs');
        let template = Handlebars.compile(edit);
        let context =  {
            text: "Edit existing advertisement",
            formType: "formEditAd",
            buttonType: "buttonEditAd",
            value: "Edit"
        };

        let html = template(context);
        $('#viewEditAd').append(html);

         $('#buttonEditAd').on('click', editAd);
    }

    await load();
}

function showDetailsAdView() {
    showView('viewDetailsAd');
}