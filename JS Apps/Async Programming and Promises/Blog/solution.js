function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_ryCW0pqqM';
    const username = 'peter';
    const pass = 'p';
    const headers = {'Authorization': 'Basic ' + btoa(`${username}:${pass}`)};
    let posts = $('#posts');

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPost);
    
    function loadPosts() {
        let req = {
            url: baseUrl + '/posts',
            headers: headers,
            success: displayPosts,
            error: handleError
        };

        $.get(req);

        function displayPosts(data) {
            posts.empty();

            for (let post of data) {
                let option = $('<option>')
                    .text(post.title)
                    .val(post._id);
                posts.append(option);
            }
        }
    }
    
    function viewPost() {
        let selectedPostId = $('#posts option:selected').val();
        let reqPosts = $.ajax({
            url: baseUrl + `/posts/${selectedPostId}`,
            headers: headers
        });

        let reqComments = $.ajax({
            url: baseUrl + `/comments/?query={"postId":"${selectedPostId}"}`,
            headers: headers
        });

        Promise.all([reqPosts, reqComments])
            .then(displayPostsWithComments)
            .catch(handleError);

        function displayPostsWithComments([post, comments]) {
            $('#post-title').text(post.title);
            $('#post-body').text(post.body);

            let list = $('#post-comments');
            list.empty();

            for (let comment of comments) {
                let li = $('<li>').text(comment.text);
                list.append(li);
            }
        }
    }

    function handleError(reason) {
       let err = $('<div>').text(`Error: ${reason.status} (${reason.statusText})`);
        $(document.body).prepend(err);

        setTimeout(function() {
            $(err).fadeOut(function() {
                $(err).remove();
            });
        }, 3000);
    }
}