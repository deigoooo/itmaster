/*
fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(albums => {
    // Recorremos el array de posts
    for(let album of albums){
        if(album.userId === 1){
            document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
                <p>${album.title}</p>
            `)
        }
    }
})    
*/

fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(albums => {
    
    const albumesFiltrados = albums.filter(album => album.userId === 1)
    
    for(let album of albumesFiltrados){        
        document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
            <p>${album.title}</p>
        `)        
    }
})   

