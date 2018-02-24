function notify(message) {
    document.getElementById('notification').textContent = message;
    document.getElementById('notification').style.display = 'block';

    setTimeout(show, 2000);

    function show() {
        document.getElementById('notification').textContent = '';
        document.getElementById('notification').style.display = 'none';
    }
}