function matchDates(dates) {
    let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let match;

    for (let date of dates) {
        while (match = pattern.exec(date)) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
}

matchDates(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.', 'My father is born on the 29-Jul-1955.']);