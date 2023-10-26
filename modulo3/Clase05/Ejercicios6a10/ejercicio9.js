const parrafo = document.getElementById('parrafo');
const mensaje = document.getElementById('mensaje');

function cambiarFontSize() {
    // Obtenemos el valor numérico ingresado por el usuario
    const numero = document.getElementById('numero').value;

    // Limpiamos el contenido del campo
    document.getElementById('numero').value=""

    // Verificar si el valor es mayor o igual a 10
    if (numero >= 10) {
        // Aplicar el nuevo tamaño de fuente al párrafo        
        parrafo.style.fontSize = `${numero}px`;
        mensaje.innerHTML = `Ahora el tamaño de la tipografía del parrafo es igual a ${numero} px`;
    } else {
        mensaje.innerHTML = 'El número debe ser igual o mayor a 10.';
    }
}