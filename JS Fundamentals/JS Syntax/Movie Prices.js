function getTicketPrice(data) {
    let [title, dayOfWeek] = data;

    let movieTable = [
        [12, 10, 15, 12.50, 15, 25, 30],
        [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15],
        [8, 8, 8, 8, 8, 10, 10],
        [10, 10, 10, 10, 10, 15, 15]
    ];

    let movies = {};
    movies['the godfather'] = 0;
    movies['schindler\'s list'] = 1;
    movies['casablanca'] = 2;
    movies['the wizard of oz'] = 3;

    let days = {};
    days['monday'] = 0;
    days['tuesday'] = 1;
    days['wednesday'] = 2;
    days['thursday'] = 3;
    days['friday'] = 4;
    days['saturday'] = 5;
    days['sunday'] = 6;

    title = title.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();

    if (movies[title] !== undefined && days[dayOfWeek] !== undefined) {
        let row = movies[title];
        let col = days[dayOfWeek];
        console.log(movieTable[row][col]);
    } else {
        console.log('error');
    }
}