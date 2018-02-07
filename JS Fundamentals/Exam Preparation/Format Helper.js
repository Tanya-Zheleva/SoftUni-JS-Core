function format(input) {
    let replacedSpacing = input[0]
        .replace(/\s*([.!,?:;])\s*/g, "$1 ")
        .replace(/"(.*?)"/g, (match, text) => `"${text.trim()}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, "$1")
        .replace(/(\.)(?:\s+)(\d+)/g, "$1$2");

    console.log(replacedSpacing);
}

format(['Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 . ']);
format(['Make,sure to give:proper spacing where is needed... ! ']);
format(['Now lets test.all         ; the     3.14     : functionality! What about trimming "  Trim me please       "!']);
format(['Test everything, including:dates    : 4.     3         .10, digits:1,2,3,4,numbers :  14.4,15.6,3. ' +
'Quotation should be should be trimmed after additional spaces are given:' +
'"Quote should remain the same, even with explanation mark in the end!"; this quote should be trimmed in the beginning: "   Trim start"!']);
format(['Now let\'s test           , absolutely everything!' +
'Aposiopesis is this: ...Have! you read the constraints?, you squidward? It would be pretty sad if this also fails "         !' +
'It would be bad if you don\'t put space after the explanation at start,aposiopesis all the way...". ' +
'Now; 8   . 1 3. 0x041       .   I hope this will be trimmed too     !']);