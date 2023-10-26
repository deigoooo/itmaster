// Seleccionamos el body
const body = document.querySelector("body");

function cambiarTema(tema){
    // Removemos todas las clases
    body.classList.remove("claro", "oscuro","otrotema","otrotema2");
    body.classList.add(tema);
}