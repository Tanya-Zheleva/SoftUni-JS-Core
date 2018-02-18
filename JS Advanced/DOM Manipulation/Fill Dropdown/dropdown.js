function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');

    let option = `<option value="${newValue}">${newText}</option>`;
    menu.innerHTML += option;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}