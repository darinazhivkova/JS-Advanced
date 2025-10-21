function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let select = document.getElementById('menu');
    let option = `<option value='${value.value}'>${text.value}</option>`;

    select.innerHTML += option;

    text.value = '';
    value.value = '';
    
}