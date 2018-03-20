function addProduct() {
    let product = $('input[type=text]').val();
    let price = $('input[type=number]').val();

    if (product !== '' && price !== '') {
        price = Number(price);
        let productTd = $(`<td>${product}</td>`);
        let priceTd = $(`<td>${price}</td>`);
        let tr = $('<tr>').append(productTd).append(priceTd);

        $('#product-list').append(tr);

        let total = $('tfoot td:last-child');
        let old = Number(total.text());
        total.text(old + price);

        $('input[type=text]').val('');
        $('input[type=number]').val('');
    } else {
        $('input[type=text]').val('');
        $('input[type=number]').val('');
    }
}