function attachEvents() {
    const forecast = $('#forecast');
    const todayForecast = $('#current');
    const upcomingForecast = $('#upcoming');
    const degree = '&#176;';
    const weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;'
    };

    $('#submit').on('click', submitTown);

     function submitTown() {
        let url = 'https://judgetests.firebaseio.com/locations.json';
        let req = {
            url: url,
            success: getWeather,
            error: displayError
        };

        $.ajax(req);
    }

    function getWeather(data) {
        let townName = $('#location').val();
        $('#location').val('');
        forecast.show();
        let town = data.filter(x => x.name === townName)[0];

        if (!town) {
            displayError();
            return;
        }

        let todayForecastReq = $.ajax({
            url:`https://judgetests.firebaseio.com/forecast/today/${town.code}.json`
        });
        let upcomingForecastReq = $.ajax({
            url: `https://judgetests.firebaseio.com/forecast/upcoming/${town.code}.json`
        });

        Promise.all([todayForecastReq, upcomingForecastReq])
            .then(displayWeather)
            .catch(displayError);
    }

    function displayWeather([todayData, upcomingData]) {
        todayForecast.empty();
        todayForecast.append($('<div>').addClass('label').text('Current conditions'));
        upcomingForecast.empty();
        upcomingForecast.append($('<div>').addClass('label').text('Three-day forecast'));

        let condition = $('<span>').addClass('condition');
        let symbol = weatherSymbols[todayData.forecast.condition];

        todayForecast.append($('<span>').addClass('condition symbol').html(symbol));
        condition.append($('<span>').addClass('forecast-data').text(todayData.name));

        let low = todayData.forecast.low;
        let high = todayData.forecast.high;

        condition.append($('<span>').addClass('forecast-data').html(`${low}${degree}/${high}${degree}`));
        condition.append($('<span>').addClass('forecast-data').text(`${todayData.forecast.condition}`));
        condition.appendTo(todayForecast);

        for (let info of upcomingData.forecast) {
            let upcoming = $('<span>').addClass('upcoming');
            let symbol = weatherSymbols[info.condition];
            let low = info.low;
            let high = info.high;

            upcoming.append($('<span>').addClass('symbol').html(symbol));
            upcoming.append($('<span>').addClass('forecast-data').html(`${low}${degree}/${high}${degree}`));
            upcoming.append($('<span>').addClass('forecast-data').text(info.condition));
            upcomingForecast.append(upcoming);
        }
    }

    function displayError(err) {
        $('#current').append($('<p>Error</p>'));
        $('#upcoming').append($('<p>Error</p>'));
    }
}