function domTraversal(selector) {
    let deepestPath = 0;
    let deepestElement;
    let leafElements = $(`${selector} *:not(:has(*))`);
    leafElements.each((index, element) => {
        let currentDeepnessLevel = 0;
        let originalElement = element;

        while (element) {
            currentDeepnessLevel++;
            element = $(element).parent()[0];
        }

        if (currentDeepnessLevel > deepestPath) {
            deepestPath = currentDeepnessLevel;
            deepestElement = originalElement;
        }
    });

    let selected = $(selector)[0];

    while (deepestElement && deepestElement !== selected) {
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }

    $(selector).addClass('highlight');
}