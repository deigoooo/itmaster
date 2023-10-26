const resultado = document.getElementById('resultado');

function validarCodigo() {
    // Obtenemos el valor del código ingresado por el usuario
    const codigo = document.getElementById('codigo').value;

    // Verificamos si el código tiene exactamente 8 caracteres y comienza con 'A'
    if (codigo.length === 8 && codigo[0] === 'A') {
        resultado.innerHTML = `El código <strong>${codigo}</strong> es válido.`;
    } else {
        resultado.innerHTML = `El código <strong>${codigo}</strong> no es válido.`;
    }
}