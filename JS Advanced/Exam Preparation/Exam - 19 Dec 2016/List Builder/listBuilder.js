function listBuilder(selector) {     // TODO: return the list builder
    return {
        createNewList: function () {
            $(selector).empty();
            let ul = $('<ul>');
            $(selector).append(ul);
        },
        addItem(text) {
            let li = $(`<li>${text}</li>`);
            let upBtn = $('<button>Up</button>').click(moveUp);
            let downBtn = $('<button>Down</button>').click(moveDown);

            function moveUp() {
                //this === button
                let prev = $(this).parent().prev();
                $(this).parent().insertBefore(prev);
            }

            function moveDown() {
                let next = $(this).parent().next();
                $(this).parent().insertAfter(next);
            }

            li.append(upBtn).append(downBtn);
            $(`${selector} ul`).append(li);
        }
    };
}