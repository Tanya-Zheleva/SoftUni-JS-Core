function loadCommits() {
    let list = $('#commits');
    list.empty();
    let username = $('#username').val();
    let repository = $('#repo').val();
    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    let p = $.get(url);
    p.then(displayData);

    p.catch(displayError);

    function displayData(data) {
        for (let commit of data) {
            let li = $(`<li>${commit.commit.author.name}: ${commit.commit.message}</li>`);
            list.append(li);
        }
    }

    function displayError(err) {
        let errorUl = $(`<li>Error: ${err.status} (${err.statusText})</li>`);
        list.append(errorUl);
    }
}