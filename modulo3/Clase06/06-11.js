fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    // Recorremos el array de posts
    for(let post of posts){
        document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        `)
    }
})    