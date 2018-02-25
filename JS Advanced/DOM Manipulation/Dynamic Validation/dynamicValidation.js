function validate() {
    let pattern = /^([a-z]+)@([a-z]+)\.([a-z]+)$/;
    document.querySelector('input')
        .addEventListener('change', onChange);

    function onChange(event) {
        if (!pattern.test(event.target.value)) {
            event.target.className = 'error';
        } else {
            event.target.removeAttribute('class');
        }
    }
}