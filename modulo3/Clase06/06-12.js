fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(usuarios => {
    for(let usuario of usuarios){
        document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
            <h1>${usuario.name}</h1>
            <p>Email: ${usuario.email}</p>
            <p>Ciudad: ${usuario.address.city}</p>
            <p>${usuario.company.name}</p>
        `)
    }
})    