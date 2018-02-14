function solve(input) {
    let svgRegex = new RegExp(/<svg>(.*?)<\/svg>/);

    if (svgRegex.test(input)) {
        let basePattern = /<svg><cat><text>.*?\[(.*?)]<\/text><\/cat>\s*<cat>(.*?)<\/cat><\/svg>/;
        let regex = new RegExp(basePattern);

        if (regex.test(input)) {
            let valuesPattern = /<g><val>([1-9]|10)\s?<\/val>(\d+)<\/g>/g;
            let valuesRegex = new RegExp(valuesPattern);

            let matches = basePattern.exec(input);
            let text = matches[1];
            let secondCatTag = matches[2];

            if (valuesRegex.test(secondCatTag)) {
                let valueMatches = valuesPattern.exec(secondCatTag);
                let votes = 0;
                let ratings = 0;

                while (valueMatches !== null) {
                    let votesFound = valueMatches[2];
                    let values = valueMatches[1];

                    ratings += Number(values) * Number(votesFound);
                    votes += Number(votesFound);
                    valueMatches = valuesPattern.exec(secondCatTag);
                }

               let avgRating = ratings / votes;
                console.log(`${text}: ${Math.round(avgRating * 100) / 100}`);
            } else {
                console.log('Invalid format');
            }
        } else {
            console.log('Invalid format');
        }
    } else {
        console.log('No survey found');
    }
}

solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat></cat></svg><p>Some more random text</p>');
solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
solve('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');