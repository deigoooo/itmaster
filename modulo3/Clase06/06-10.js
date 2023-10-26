fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(json => {
    document.getElementById("contenedor").innerHTML = `
        <h1>${json.url}</h1>
        <p>${json.body}</p>
    `
})    