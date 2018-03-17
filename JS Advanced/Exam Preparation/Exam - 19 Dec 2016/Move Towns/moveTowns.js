function move(direction) {
    if (direction < 0) {
        let town = $('#towns :selected');
        let prev = town.prev();
        let temp = town.val();

        town.text(prev.val());
        prev.text(temp);

        prev.prop('selected', true);
        town.prop('selected', false);
    } else {
        let town = $('#towns :selected');
        let next = town.next();
        let temp = town.val();

        town.text(next.val());
        next.text(temp);

        next.prop('selected', true);
        town.prop('selected', false);
    }
}