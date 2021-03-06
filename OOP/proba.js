/*
let text = "lorem ipsum blablabla";

console.log(text.slice(0,15));*/




function fetchPosts() {
    let promiseObj = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
                console.log(data.body);
            } else if (request.readyState === 4) {
                reject("Error: Could not fetch data");
            }
        });

        request.open('GET', ` https://jsonplaceholder.typicode.com/posts/1`);
        request.send();
    })}


    fetchPosts();

const markup = `
 <div class="data">
    <h2>
        ${data.id}
    </h2>
    <p class="location">${data.title}</p>
    <p class="bio">${data.body}</p>
 </div>
`;






