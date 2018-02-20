function search() {
    let searchValue = $('#searchText')[0].value;
    let towns = $('#towns li').toArray();
    let found = 0;

    for (let town of towns) {
        if (town.textContent.includes(searchValue)) {
            found++;
            $(town).css('font-weight', 'bold');
        }
    }

    let result = `${found} matches found`;
    $('#result').text(result);
}