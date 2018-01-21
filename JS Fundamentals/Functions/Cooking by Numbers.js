function solve(input) {
    let number = Number(input[0]);

    let chop = x => x /= 2;
    let dice = x => x = Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x *= 3;
    let fillet = x => x -= x * 0.2;

    let func = (x, f) => f(x);

    for(let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':
                number = func(number, chop);
                break;
            case 'dice':
                number = func(number, dice);
                break;
            case 'spice':
                number = func(number, spice);
                break;
            case 'bake':
                number = func(number, bake);
                break;
            case 'fillet':
                number = func(number, fillet);
                break;
        }

        console.log(number);
    }
}