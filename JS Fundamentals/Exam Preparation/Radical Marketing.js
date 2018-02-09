function solve(input) {
    let people = new Map();

    for (let token of input) {
        token = token.split('-');

        if (token.length === 1) {
            let registered = token[0];

            if (!people.has(registered)) {
                people.set(registered, {subscriptions: 0, followers: []});
            }
        } else {
            let follower = token[0];
            let following = token[1];

            if (people.has(follower) && people.has(following)) {
                people.get(following).followers.push(follower);
                people.get(follower).subscriptions++;
            }
        }
    }

    let sorted = [...people].sort((a, b) => {
        let firstFollowers = people.get(a[0]).followers.length;
        let secondFollowers = people.get(b[0]).followers.length;

        if (firstFollowers !== secondFollowers) {
            return secondFollowers - firstFollowers;
        }

        return people.get(b[0]).subscriptions - people.get(a[0]).subscriptions;
    });

    let person = sorted[0];
    console.log(person[0]);
    let followersCounter = 1;

    for (let follower of person[1].followers) {
        console.log(`${followersCounter}. ${follower}`);
        followersCounter++;
    }
}

solve(['A',
       'B',
       'C',
       'D',
       'A-B',
       'B-A',
       'C-A',
       'D-A']);