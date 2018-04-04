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
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    $('#formRegister').trigger('reset');
    showView('viewRegister');
}

function showCreateAdView() {
    $('#formCreateAd').trigger('reset');
    showView('viewCreateAd');
}

function showListAdsView() {
    showView('viewAds');
}

function showEditAdView() {
    showView('viewEditAd');
}

function showDetailsAdView() {
    showView('viewDetailsAd');
}