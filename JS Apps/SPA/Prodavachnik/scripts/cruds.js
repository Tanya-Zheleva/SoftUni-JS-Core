const kinveyBaseUrl = "https://baas.kinvey.com/";
const appKey = 'kid_rJxJ0Kfif';
const appSecret = 'cea443eaef974f0f81899dd640d2964b';
const headers = {'Authorization': "Basic " + btoa(appKey + ":" + appSecret)};

function registerUser() {
    let regForm = $('#formRegister');
    let data = {
        username: regForm.find('input[name=username]').val(),
        password: regForm.find('input[name=passwd]').val()
    };

    $.ajax({
        url: kinveyBaseUrl + 'user/' + appKey + '/',
        method: 'POST',
        headers: headers,
        data: data
    })
        .then((res) => {
            signInUser(res, 'Registration successful.');
        })
        .catch(handleAjaxError);
}

function loginUser() {
    let logForm = $('#formLogin');
    let data = {
        username: logForm.find('input[name=username]').val(),
        password: logForm.find('input[name=passwd]').val()
    };

    $.ajax({
        url: kinveyBaseUrl + 'user/' + appKey + '/login',
        method: 'POST',
        data: data,
        headers: headers
    })
        .then((res) => signInUser(res, 'Login successful.'))
        .catch(handleAjaxError);
}

function logoutUser() {
    sessionStorage.clear();
    $('#loggedInUser').text('');
    showHomeView();
    showHideLinks();
    showInfo('Logout successful.');
}

function createAd() {
    let createForm = $('#formCreateAd');
    const kinveyAuthHeaders = {
        'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
    };

    let publisher = sessionStorage.getItem('username');
    let data = {
        title: createForm.find('input[name=title]').val(),
        description: createForm.find('textarea[name=description]').val(),
        date: createForm.find('input[name=datePublished]').val(),
        price: createForm.find('input[name=price]').val(),
        image: createForm.find('input[name=imageUrl]').val(),
        publisher: publisher,
        views: 1
    };

    $.ajax({
        url: kinveyBaseUrl + 'appdata/' + appKey + '/ads',
        method: 'POST',
        headers: kinveyAuthHeaders,
        data: data
    })
        .then((res) => {
            showInfo('Ad created.');
            listAds();
        })
        .catch(handleAjaxError);
}

function listAds() {
    const kinveyAuthHeaders = {
        'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
    };

    $.ajax({
        url: kinveyBaseUrl + 'appdata/' + appKey + '/ads',
        method: 'GET',
        headers: kinveyAuthHeaders
    })
        .then((res) => {
            showListAdsView();
            displayAds(res.reverse());
        })
        .catch(handleAjaxError);
}

function displayAds(ads) {
    let table = $('#ads').find('> table');

    table.find('tr').each((index, element) => {
        if (index > 0) {
            $(element).remove();
        }
    });

    for (let ad of ads) {
        let tr = $('<tr>');
        let maxChars = 30;

        tr.append($('<td>').text(ad.title));
        tr.append($('<td>').text(ad.publisher));

        if (ad.description.length > maxChars) {
            tr.append($('<td>').text(ad.description.substring(0, maxChars) + '...'));
        } else {
            tr.append($('<td>').text(ad.description));
        }

        tr.append($('<td>').text(Number(ad.price).toFixed(2)));
        tr.append($('<td>').text(ad.date));

        tr.append($('<td>')
            .append($('<a href="#">[Read more]</a>').on('click', function () {
                displaySingleAd(ad);
            })));

        if (ad._acl.creator === sessionStorage['userId']) {
            tr.find('td:last-child').append($('<a href="#">[Delete]</a>').on('click', function () {
                    deleteAd(ad);
                }))
                .append($('<a href="#">[Edit]</a>').on('click', function () {
                    loadAdForEdit(ad);
                }));
        }

        table.append(tr);
    }
}

function displaySingleAd(ad) {
    showDetailsAdView();
    updateViews(ad);
    let details = $('#viewDetailsAd');
    details.empty();

    let adInfo = $('<div>').append(
        $('<br>'),
        $(`<img src="${ad.image}">`),
        $('<br>'),
        $('<label>').text('Title:'),
        $('<h1>').text(ad.title),
        $('<label>').text('Description:'),
        $('<p>').text(ad.description),
        $('<br>'),
        $('<label>').text('Publisher'),
        $('<div>').text(ad.publisher),
        $('<label>').text('Date:'),
        $('<div>').text(ad.date),
        $('<label>').text('Views'),
        $('<div>').text(ad.views)
    );

    details.append(adInfo);
}

function updateViews(ad) {
    const kinveyAuthHeaders = {
        'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
    };

    let data = {
        title: ad.title,
        description: ad.description,
        price: ad.price,
        date: ad.date,
        publisher: ad.publisher,
        views: Number(ad.views) + 1,
        image: ad.image
    };

    $.ajax({
        url: kinveyBaseUrl + 'appdata/' + appKey + '/ads/' + ad._id,
        method: 'PUT',
        headers: kinveyAuthHeaders,
        data: data
    })
       // .catch(handleAjaxError);
}

function editAd() {
    let editForm = $('#formEditAd');
    const kinveyAuthHeaders = {
        'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
    };

    let data = {
        title: editForm.find('input[name=title]').val(),
        description: editForm.find('textarea[name=description]').val(),
        price: editForm.find('input[name=price]').val(),
        date: editForm.find('input[name=datePublished]').val(),
        publisher: editForm.find('input[name=publisher]').val(),
        image: editForm.find('input[name=imageUrl]').val(),
        views: editForm.find('input[name=views]').val()
    };

    $.ajax({
        url: kinveyBaseUrl + 'appdata/' + appKey + '/ads/' + editForm.find('input[name=id]').val(),
        method: 'PUT',
        headers: kinveyAuthHeaders,
        data: data
    })
        .then((res)=> {
            showInfo('Ad edited.');
            listAds();
        })
        .catch(handleAjaxError);
}

function deleteAd(ad) {
    const kinveyAuthHeaders = {
        'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
    };

    $.ajax({
        url: kinveyBaseUrl + 'appdata/' + appKey + '/ads/' + ad._id,
        method: 'DELETE',
        headers: kinveyAuthHeaders
    })
        .then((res) => {
            showInfo('Ad deleted.');
            listAds();
        })
        .catch(handleAjaxError);
}

function loadAdForEdit(ad) {
    let editForm = $('#formEditAd');

    editForm.find('input[name=id]').val(ad._id);
    editForm.find('input[name=publisher]').val(ad.publisher);
    editForm.find('input[name=views]').val(ad.views);
    editForm.find('input[name=title]').val(ad.title);
    editForm.find('textarea[name=description]').val(ad.description);
    editForm.find('input[name=price]').val(ad.price);
    editForm.find('input[name=datePublished]').val(ad.date);
    editForm.find('input[name=imageUrl]').val(ad.image);

    showEditAdView();
}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);

    showHomeView();
    showHideLinks();
    showInfo(message);
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);

    if (response.readyState === 0) {
        errorMsg = "Cannot connect due to network error.";
    }

    if (response.responseJSON && response.responseJSON.description) {
        errorMsg = response.responseJSON.description;
    }

    showError(errorMsg)
}