function tableBuilder(selector) {
    return {
        createTable(columnNames) {
            $(selector).empty();
            //Add col Action at the end
            let table = $('<table>');
            let row = $('<tr>');

            for (let name of columnNames) {
                let th = $(`<th>${name}</th>`);
                row.append(th);
            }

            row.append($(`<th>Action</th>`));
            table.append(row);
            $(selector).append(table);
        },
        fillData(dataRows) {
            let table = $('table');

            for (let dataRow of dataRows) {
                let row = $('<tr>');

                for (let col of dataRow) {
                    let td = $('<td>').text(col);
                    row.append(td);
                }

                let actionTd = $('<td>');
                let btn = $('<button>Delete</button>').click(deleteRow);
                actionTd.append(btn);
                row.append(actionTd);
                table.append(row);
            }

            function deleteRow() {
                //this === button
                let row = $(this).parent().parent();
                row.remove();
            }
        }
    }
}