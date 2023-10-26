const peliculas = [
    {"titulo":"Titanic","director":"James Cameron","year":1997,"reparto":["Leonardo DiCaprio","Kate Winslet"]},
    {"titulo":"Terminator","director":"James Cameron","year":1984,"reparto":["Arnold Schwarzenegger","Linda Hamilton"]},
    {"titulo":"Inception","director":"Nolan","year":2010,"reparto":["Leonardo DiCaprio","Cillian Murphy","Tom Hardy"]}    
]

// Recorremos el array de peliculas
for(let pelicula of peliculas){

    // Creamos una variable para acumular los li del reparto
    let reparto = ""

    for(let actor of pelicula.reparto){
        reparto += `<li>${actor}</li>`
    }

    // Agregamos en el HTML los datos de cada registro, es decir de cada JSON dentro del array
    document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
        <h1>${pelicula.titulo} (${pelicula.year})</h1>
        <p>Director ${pelicula.director}</p>
        <p>Reparto:</p>
        <ul>
            ${reparto}
        </ul>
    `);
}