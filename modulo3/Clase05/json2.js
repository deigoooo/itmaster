const persona = {
    "dni":"9999999999",
    "pais":"Argentina",
    "ciudad":"Buenos Aires",
    "nombre":"Dami",
    "usuario": "damiande"
};

function buscarDatos(){
    // Obtenemos lo que el usuario escribe y lo pasamos a minúsculas
    const dato = document.querySelector("#dato").value.toLowerCase();

    // Limpiamos el input donde escribió el usuario
    document.querySelector("#dato").value = "";

    // document.querySelector("#respuesta").insertAdjacentHTML("beforeend", dato +": "+persona[dato]+"<br>");

    document.querySelector("#respuesta").insertAdjacentHTML("beforeend",`<p>${dato}: ${persona[dato]}</p>`    
    )

}