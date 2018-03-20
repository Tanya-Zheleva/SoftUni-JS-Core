let data = require('./data');

function sort(property) {
    data.sort((a, b) => a[property].localeCompare(b[property]));

    return data;
}

function filter(property, value) {
    return data.filter(x => x[property] === value);
}

result.sort = sort;
result.filter = filter;