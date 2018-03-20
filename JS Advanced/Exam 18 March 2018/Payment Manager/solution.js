class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    createTable(id) {
        let table = $('<table>');
        let caption = $(`<caption>${this.title} Payment Manager</caption>`);
        let thead = $('<thead>');
        let rowHead = $('<tr>')
            .append($('<th>Name</th>').addClass('name'))
            .append($('<th>Category</th>').addClass('category'))
            .append($('<th>Price</th>').addClass('price'))
            .append($('<th>Actions</th>'));

        let tbody = $('<tbody>').addClass('payments');
        let tfoot = $('<tfoot>').addClass('input-data');
        let rowFoot = $('<tr>');

        let nameTd = $('<td>').append($('<input>').attr('name', 'name').attr('type', 'text'));
        let categoryTd = $('<td>').append($('<input>').attr('name', 'category').attr('type', 'text'));
        let priceTd = $('<td>').append($('<input>').attr('name', 'price').attr('type', 'number'));
        let addBtn = $('<td>').append($('<button>Add</button>').on('click', add));

        function add() {
            let name = $(`${id} .input-data input[name=name]`).val();
            let category = $(`${id} .input-data input[name=category]`).val();
            let price = $(`${id} .input-data input[name=price]`).val();

            if (name !== '' && category !== '' && price !== '') {
                let nameToAdd = $(`<td>`).text(name);
                let categoryToAdd = $(`<td>`).text(category);
                let priceToAdd = $(`<td>${Number(price)}</td>`);
                let deleteTd = $('<td>');
                let deleteBtn = $('<button>Delete</button>').on('click', deleteRow);
                deleteTd.append(deleteBtn);

                function deleteRow() {
                    $(this).parent().parent().remove();
                }

                let paymentsRow = $('<tr>')
                    .append(nameToAdd)
                    .append(categoryToAdd)
                    .append(priceToAdd)
                    .append(deleteTd);

                $(`${id} .payments`).append(paymentsRow);

                $(`${id} .input-data input[name=name]`).val('');
                $(`${id} .input-data input[name=category]`).val('');
                $(`${id} .input-data input[name=price]`).val('');
            }
        }

        rowFoot.append(nameTd);
        rowFoot.append(categoryTd);
        rowFoot.append(priceTd);
        rowFoot.append(addBtn);
        tfoot.append(rowFoot);

        thead.append(rowHead);
        table.append(caption);
        table.append(thead);
        table.append(tbody);
        table.append(tfoot);

        return table;
    }

    render(id) {
        let table = this.createTable('#' + id);
        $('#' + id).append(table);
    }
}