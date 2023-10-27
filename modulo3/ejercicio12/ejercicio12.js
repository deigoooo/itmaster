const libro = {
    "titulo": "Apps HTML para móviles",
    "autor": "Damián De Luca",
    "fecha": 2014,
    "paginas": 272
};


document.querySelector("#contenedor").innerHTML = `
    <h1>${libro.titulo}</h1>
    <h2>Autor: ${libro.autor}</h2>
    <p>Fecha de lanzamiento: ${libro.fecha}</p>
    <p>Cantidad de páginas: ${libro.paginas}</p>
`

