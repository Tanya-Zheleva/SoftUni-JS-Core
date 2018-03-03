function solution(input) {
    let obj = this;

    switch (input) {
        case 'upvote':
            obj.upvotes++;
            break;
        case 'downvote':
            obj.downvotes++;
            break;
        case 'score':
            return score(obj);
    }

    function score(obj) {
        let temp = 0;
        let totalVotes = obj.upvotes + obj.downvotes;
        let score = obj.upvotes - obj.downvotes;

        if (totalVotes > 50) {
            temp = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25);
        }

        let rating = '';

        if (totalVotes >= 10) {
            if (obj.upvotes / totalVotes > 0.66) {
                rating = 'hot';
            } else if (score >= 0 && (obj.upvotes > 100 || obj.downvotes > 100)) {
                rating = 'controversial';
            } else if (score < 0) {
                rating = 'unpopular';
            } else {
                rating = 'new';
            }
        } else {
            rating = 'new';
        }

        return [obj.upvotes + temp, obj.downvotes + temp, score, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
console.log(solution.call(post, 'score'));

for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}

console.log(solution.call(post, 'score'));
