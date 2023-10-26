fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    document.getElementById("contenedor").innerHTML = `
        <h1>${json.title}</h1>
        <p>${json.body}</p>
    `;
  });
