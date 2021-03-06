fetch("https://jsonplaceholder.typicode.com/users")
    .then(
        response => {
            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                return response.json()
            }
        })
        .then(data => console.log(data))
        .catch(error => console.error("Could not fetch data", error));


