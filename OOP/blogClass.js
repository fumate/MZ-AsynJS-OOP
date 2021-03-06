import {Post} from "./postClass.js";
import {User} from "./userClass.js";


export class Blog {
    title;
    author;
    posts;

    constructor(title) {
        this.title = title;
        this.author = User;
        this.posts = Post;
    }
    get Post () {
        this.posts = [];
    }
    fetchPosts() {
        let promiseObj = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    let data = JSON.parse(request.responseText);
                    resolve(data);
                    //this.posts.push(data);
                    console.log(data);

                } else if (request.readyState === 4) {
                    this.posts = [];
                    reject("Error: Could not fetch data");
                }
            });

            request.open('GET', ` https://jsonplaceholder.typicode.com/posts/${postId}`);
            request.send();
        });


    }
    addPost(post) {

    }
    deletePost(postId) {

    }
    getPostsById(postId) {

    }
}





