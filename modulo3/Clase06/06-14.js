fetch('https://jsonplaceholder.typicode.com/photos/1')
.then(response => response.json())
.then(json => {
    document.getElementById("contenedor").innerHTML = `
        <img src="${json.url}">
        <p>${json.title}</p>
    `
})    