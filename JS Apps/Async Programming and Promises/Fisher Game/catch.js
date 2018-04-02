function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_SyQ1noCqG';
    const username = 'pesho';
    const pass = 'p';
    const base64Auth = btoa(username + ':' + pass);
    const authHeader = {
        'Authorization': 'Basic ' + base64Auth,
        'Content-type': 'application/json'
    };

    $('.load').on('click', loadAllCatches);
    $('.add').on('click', addCatch);

    function request(method, endpoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endpoint,
            headers: authHeader,
            data: JSON.stringify(data)
        });
    }
    
    function addCatch() {
        let inputs = $(this).parent().find('input');
        let catchElement = $('#addForm');
        let dataObj = generateObject(catchElement);

        request('POST', '/biggestCatches', dataObj)
            .then(loadAllCatches)
            .catch(handleError);

        for (let input of inputs) {
            $(input).val('');
        }
    }

    function loadAllCatches() {
        request('GET', '/biggestCatches')
            .then(displayAllCatches)
            .catch(handleError);

    }

    function displayAllCatches(data) {
        let catches = $('#catches');
        catches.empty();

        for (let token of data) {
            catches.append($(`<div class="catch" data-id="${token._id}">`)
                .append($('<label>').text('Angler'))
                .append($(`<input class="angler" value="${token.angler}" type="text">`))
                .append($('<label>').text('Weight'))
                .append($(`<input class="weight" value="${token.weight}" type="number">`))
                .append($('<label>').text('Species'))
                .append($(`<input class="species" value="${token.species}" type="text">`))
                .append($('<label>').text('Location'))
                .append($(`<input class="location" value="${token.location}" type="text">`))
                .append($('<label>').text('Bait'))
                .append($(`<input class="bait" value="${token.bait}" type="text">`))
                .append($('<label>').text('Capture Time'))
                .append($(`<input class="captureTime" value="${token.captureTime}" type="number">`))
                .append($('<button class="update">Update</button>').on('click', updateCatch))
                .append($('<button class="delete">Delete</button>').on('click', deleteCatch))
            )
        }
    }
    
    function updateCatch() {
        let id = $(this).parent().attr('data-id');
        let element = $(this).parent();
        let newObj = generateObject(element);

        request('PUT', `/biggestCatches/${id}`, newObj)
            .then(loadAllCatches)
            .catch(handleError);
    }
    
    function deleteCatch() {
        let id = $(this).parent().attr('data-id');
        request('DELETE', `/biggestCatches/${id}`)
            .then(loadAllCatches)
            .catch(handleError);
    }

    function generateObject(element) {
        return {
            angler: element.find('.angler').val(),
            weight: Number(element.find('.weight').val()),
            species: element.find('.species').val(),
            location: element.find('.location').val(),
            bait: element.find('.bait').val(),
            captureTime: Number(element.find('.captureTime').val())
        };
    }

    function handleError(err) {
       console.warn(err);
    }
}