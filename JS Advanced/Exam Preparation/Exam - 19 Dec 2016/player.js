class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        return this.scores[0];
    }

    get topFiveScore() {
        return this.scores.slice(0, 5);
    }

    addScore(number) {
        if (typeof number === 'number' || Number(number)) {
            this.scores.push(Number(number));
            this.scores.sort((a, b) => b - a);
        }

        return this;
    }

    toString() {
        return `${this.nickName}: [${this.scores}]`;
    }
}

let player = new Player('Misho');

player.addScore(130);
player.addScore(240);
player.addScore(0);
player.addScore('Pesho');

console.log(player.topFiveScore[0]);

