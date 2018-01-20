function calculateDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let fullDay = 24 * 60 * 60 * 1000;
    let nextDay = new Date(date.getTime() + fullDay);

    let result = nextDay.getFullYear() + '-' + (nextDay.getMonth() + 1) + '-' + nextDay.getDate();

    return result;
}