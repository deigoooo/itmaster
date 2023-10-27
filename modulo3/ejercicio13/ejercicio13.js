const libros = [
    {"titulo":"La máquina del tiempo","autor":"H. G. Wells","year":1895,"genero":"Ciencia Ficción"},
    {"titulo":"El fin de la Eternidad","autor":"Isaac Asimov","year":1955,"genero":"Ciencia Ficción"},
    {"titulo":"El hombre invisible","autor":"H. G. Wells","year":1897,"genero":"Ciencia Ficción"},
    {"titulo":"El resplandor","autor":"Stephen King","year":1977,"genero":"Terror"},
    {"titulo":"1984","autor":"George Orwell","year":1949,"genero":"Ciencia Ficción"},
    {"titulo":"Drácula","autor":"Bram Stoker","year":1897,"genero":"Terror"},
    {"titulo":"De la Tierra a la Luna","autor":"Julio Verne","year":1865,"genero":"Ciencia Ficción"},
    {"titulo":"Contacto","autor":"Carl Sagan","year":1985,"genero":"Ciencia Ficción"},
]

for(let libro of libros){
    if(libro.year <1900 && libro.genero == "Ciencia Ficción"){
        document.getElementById("lista").insertAdjacentHTML("beforeend",`        
            <li><strong>${libro.titulo}</strong> (${libro.year}). Autor: ${libro.autor}. Género: ${libro.genero}</li>
        `)
    }
}