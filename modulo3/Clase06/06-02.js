const peliculas = [
    {"titulo":"Titanic","director":"James Cameron","year":1997},
    {"titulo":"Terminator","director":"James Cameron","year":1984},
    {"titulo":"Barbie","director":"Greta Gerwig","year":2023},
    {"titulo":"Inception","director":"Nolan","year":2010},
    {"titulo":"A Haunting in Venice","director":"Kenneth Branagh","year":2023}
];

// Películas de 2023

for(let pelicula of peliculas){
    if (pelicula.year==2023){
        document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
        <h1>${pelicula.titulo} (${pelicula.year})</h1>
        <p>Dirigida por: ${pelicula.director}</p>     
    `)
    }      
}