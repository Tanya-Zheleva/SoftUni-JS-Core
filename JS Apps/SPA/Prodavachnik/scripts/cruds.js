const kinveyBaseUrl = "https://baas.kinvey.com/";
const appKey = 'kid_rJxJ0Kfif';
const appSecret = 'cea443eaef974f0f81899dd640d2964b';

function requester(method, endpoint, authorization, data) {
    function getAuthorization(type) {
        return type === 'basic'
            ? 'Basic ' + btoa(appKey + ":" + appSecret)
            : 'Kinvey ' + sessionStorage.getItem('authToken');
    }

    return $.ajax({
        url: kinveyBaseUrl + endpoint,
        method: method,
        headers: {'Authorization': getAuthorization(authorization)},
        data: data
    });
}

function registerUser() {
    let regForm = $('#formRegister');
    const endpoint = 'user/' + appKey + '/';
    let data = {
        username: regForm.find('input[name=username]').val(),
        password: regForm.find('input[name=passwd]').val()
    };

    requester('POST', endpoint, 'basic', data)
        .then((res) => signInUser(res, 'Registration successful.'))
        .catch(handleAjaxError);
}

function loginUser() {
    let logForm = $('#formLogin');
    let data = {
        username: logForm.find('input[name=username]').val(),
        password: logForm.find('input[name=passwd]').val()
    };

    const endpoint = 'user/' + appKey + '/login';

    requester('POST', endpoint, 'basic', data)
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

function createAd() { //Use ',' for decimal separator
    let createForm = $('#formCreateAd');
    const publisher = sessionStorage.getItem('username');
    const endpoint = 'appdata/' + appKey + '/ads';

    let data = {
        title: createForm.find('input[name=title]').val(),
        description: createForm.find('textarea[name=description]').val(),
        date: createForm.find('input[name=datePublished]').val(),
        price: createForm.find('input[name=price]').val(),
        image: createForm.find('input[name=imageUrl]').val(),
        publisher: publisher,
        views: 1
    };

    requester('POST', endpoint, 'kinvey', data)
        .then((res) => {
            showInfo('Ad created.');
            listAds();
        })
        .catch(handleAjaxError);
}

function listAds() {
    const endpoint = 'appdata/' + appKey + '/ads';

    requester('GET', endpoint, 'kinvey')
        .then((res) => {
            showListAdsView();
            displayAds(res.reverse());
        })
        .catch(handleAjaxError);
}

function displayAds(ads) {
    let table = $('<table>');
    $('#ads').empty();

    let headerRow = $('<tr>');
    headerRow.append($('<th>').text('Title'),
        $('<th>').text('Publisher'),
        $('<th>').text('Description'),
        $('<th>').text('Price'),
        $('<th>').text('Date Published'),
        $('<th>').text('Actions'));

    table.append(headerRow);
    $('#ads').append(table);

    for (let ad of ads) {
        let tr = $('<tr>');
        const maxChars = 30;

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
            .append($('<a href="#">[Read more]</a>').on('click', () => displaySingleAd(ad))));

        if (ad._acl.creator === sessionStorage['userId']) {
            tr.find('td:last-child').append($('<a href="#">[Delete]</a>').on('click', () => deleteAd(ad)))
                .append($('<a href="#">[Edit]</a>').on('click',() => loadAdForEdit(ad)));
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
    const endpoint = 'appdata/' + appKey + '/ads/' + ad._id;

    let data = {
        title: ad.title,
        description: ad.description,
        price: ad.price,
        date: ad.date,
        publisher: ad.publisher,
        views: Number(ad.views) + 1,
        image: ad.image
    };

    requester('PUT', endpoint, 'kinvey', data);
    // .catch(handleAjaxError);
}

function editAd() { //Use ',' for decimal separator
    let editForm = $('#formEditAd');
    const endpoint = 'appdata/' + appKey + '/ads/' + editForm.find('input[name=id]').val();

    let data = {
        title: editForm.find('input[name=title]').val(),
        description: editForm.find('textarea[name=description]').val(),
        price: editForm.find('input[name=price]').val(),
        date: editForm.find('input[name=datePublished]').val(),
        publisher: editForm.find('input[name=publisher]').val(),
        image: editForm.find('input[name=imageUrl]').val(),
        views: editForm.find('input[name=views]').val()
    };

    requester('PUT', endpoint, 'kinvey', data)
        .then((res) => {
            showInfo('Ad edited.');
            listAds();
        })
        .catch(handleAjaxError);
}

function deleteAd(ad) {
    const endpoint = 'appdata/' + appKey + '/ads/' + ad._id;

    requester('DELETE', endpoint, 'kinvey')
        .then((res) => {
            showInfo('Ad deleted.');
            listAds();
        })
        .catch(handleAjaxError);
}

async function loadAdForEdit(ad) {
    await showEditAdView();
    let editForm = $('#formEditAd');

    editForm.find('input[name=id]').val(ad._id);
    editForm.find('input[name=publisher]').val(ad.publisher);
    editForm.find('input[name=views]').val(ad.views);
    editForm.find('input[name=title]').val(ad.title);
    editForm.find('textarea[name=description]').val(ad.description);
    editForm.find('input[name=price]').val(ad.price);
    editForm.find('input[name=datePublished]').val(ad.date);
    editForm.find('input[name=imageUrl]').val(ad.image);
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