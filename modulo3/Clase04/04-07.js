const menu = document.getElementById("menu");

// Ocultamos el menú de manera predeterminada
menu.style.display = "none";

function toggleMenu(){
    // Verificamos si el menú esta "No visible"
    if(menu.style.display == "none"){
        // Mostramos el menú
        menu.style.display = "block";
    } else{
        // Ocultamos el menú
        menu.style.display = "none";
    }
}