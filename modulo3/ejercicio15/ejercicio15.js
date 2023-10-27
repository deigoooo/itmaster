fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        const itemsfiltrados = json.filter(item => item.userId === 5 && item.completed === true);

        for(let item of itemsfiltrados){
            document.getElementById("lista").insertAdjacentHTML("beforeend",`
                <li>
                    Tarea: ${item.title}: <em>completa</em>
                </li>
            `)
        }
      })