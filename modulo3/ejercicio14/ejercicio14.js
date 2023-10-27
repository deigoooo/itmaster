fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        const itemsfiltrados = json.filter(item=>item.albumId ===10);

        for(let item of itemsfiltrados){
            document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
                <figure>
                    <img src="${item.thumbnailUrl}">
                    <figcaption>${item.title}</figcaption>
                </figure>
            `)
        }
      })