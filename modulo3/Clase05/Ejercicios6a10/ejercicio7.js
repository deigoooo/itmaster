const resultado = document.getElementById('resultado');

function validarDivisibilidad() {
    // Obtenemos el valor del número ingresado por el usuario
    const numero = Number(document.getElementById('numero').value);

    // Verificar si el número es divisible por 100
    if (numero % 100 == 0) {
        // Escribimos el mensaje de éxito
        resultado.innerHTML = `${numero} es divisible por 100.`;
    } else {
        // Escribimos el mensaje de error
        resultado.innerHTML = `${numero} no es divisible por 100.`;
    }
}