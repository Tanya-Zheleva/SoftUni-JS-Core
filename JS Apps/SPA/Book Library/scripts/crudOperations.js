const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_H1N_5XWjf';
const APP_SECRET = 'a427390005ef488c83c7e7f7741ebe8b';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

function loginUser() {
    // POST -> BASE_URL + 'user/' + APP_KEY + '/login'
    let data = {
        username: $('#formLogin').find('input[name=username]').val(),
        password: $('#formLogin').find('input[name=passwd]').val()
    };

    $.ajax({
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        method: 'POST',
        headers: AUTH_HEADERS,
        data: data,
    })
        .then((res) => signInUser(res, 'Login successful.'))
        .catch(handleAjaxError);
}

function registerUser() {
    // POST -> BASE_URL + 'user/' + APP_KEY + '/'
    let data = {
        username: $('#formRegister').find('input[name=username]').val(),
        password: $('#formRegister').find('input[name=passwd]').val()
    };

    $.ajax({
        url: BASE_URL + 'user/' + APP_KEY + '/',
        method: 'POST',
        headers: AUTH_HEADERS,
        data: data
    })
        .then((res) => signInUser(res, 'Registration successful.'))
        .catch(handleAjaxError);
}

function listBooks() {
    // GET -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    //$('#books').empty();

    $.ajax({
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        method: 'GET',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    })
        .then((res) => {
            showView('viewBooks');
            displayPaginationAndBooks(res.reverse())
        })
        .catch(handleAjaxError);
}

function createBook() {
    // POST -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    let data = {
        title: $('#formCreateBook').find('input[name=title]').val(),
        author: $('#formCreateBook').find('input[name=author]').val(),
        description: $('#formCreateBook').find('textarea[name=description]').val()
    };

    $.ajax({
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        method: 'POST',
        data: data,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    })
        .then((res) => {
            showInfo('Book created.');
            listBooks();
        })
        .catch(handleAjaxError);
}

function deleteBook(book) {
    // DELETE -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id

    $.ajax({
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        method: 'DELETE',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    })
        .then((res) => {
            showInfo('Book deleted.');
            listBooks();
        })
        .catch(handleAjaxError);
}

function loadBookForEdit(book) {
    $('#formEditBook').find('input[name=id]').val(book._id);
    $('#formEditBook').find('input[name=title]').val(book.title);
    $('#formEditBook').find('input[name=author]').val(book.author);
    $('#formEditBook').find('textarea[name=description]').val(book.description);

    showView('viewEditBook');
}

function editBook() {
    // PUT -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    let data = {
        title: $('#formEditBook').find('input[name=title]').val(),
        author: $('#formEditBook').find('input[name=author]').val(),
        description: $('#formEditBook').find('textarea[name=description]').val()
    };

    $.ajax({
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + $('#formEditBook').find('input[name=id]').val(),
        method: 'PUT',
        data: data,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    })
        .then((res) => {
            listBooks();
            showInfo('Book edited.');
        })
        .catch(handleAjaxError);
}

function saveAuthInSession(userInfo) {
    // TODO
}

function logoutUser() {
    sessionStorage.clear();
    $('#loggedInUser').text('');
    showHomeView();
    showHideMenuLinks();
    showInfo('Logout successful.');
}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);
    showHomeView();
    showHideMenuLinks();
    showInfo(message);
}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo');
    if (pagination.data("twbs-pagination")) {
        pagination.twbsPagination('destroy');
    }

    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            let table = $('#books > table');

            table.find('tr').each((index, element) => {
                if (index > 0) {
                    $(element).remove();
                }
            });

            let startBook = (page - 1) * BOOKS_PER_PAGE;
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length);
            $(`a:contains(${page})`).addClass('active');

            for (let i = startBook; i < endBook; i++) {
                let current = books[i];
                let tr = $('<tr>');

                tr.append($('<td>').text(current.title));
                tr.append($('<td>').text(current.author));
                tr.append($('<td>').text(current.description));

                if (current._acl.creator === sessionStorage['userId']) {
                    tr.append($('<td>')
                        .append($('<a href="#">[Delete]</a>').on('click', function () {
                            deleteBook(current);
                        }))
                        .append($('<a href="#">[Edit]</a>').on('click', function () {
                            loadBookForEdit(current);
                        })));
                }

                table.append(tr);
            }
        }
    });
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}