function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let base = super.toString();
            let result = base + `Rating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {
                result += '\nComments:\n' + this.comments.map(x => ` * ${x}`).join('\n');
            }

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;

            return this;
        }

        toString() {
            let base = super.toString();
            base += `Views: ${this.views}`;

            return base;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

let data = solve();

let scm = new data.SocialMediaPost('TestTitle', 'TestContent', 5, 10);
scm.addComment('1');
scm.addComment('2');
scm.addComment('3');
console.log(scm.toString());
