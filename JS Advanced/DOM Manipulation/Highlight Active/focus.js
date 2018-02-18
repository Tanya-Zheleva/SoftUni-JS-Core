function focus() {
    let inputs = document.getElementsByTagName('input');
    let inputsArr = Array.from(inputs);

    inputsArr.forEach(x => {
        x.addEventListener('focus', (event) => {
            event.target.parentNode.className = 'focused';
        });

        x.addEventListener('blur', (event) => {
            event.target.parentNode.removeAttribute('class');
        });
    })
}