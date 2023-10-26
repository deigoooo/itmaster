function escribir(){
    // Obtenemos los datos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    // Validamos que los campos no estén no estén vacíos mediante el length de cada campo de texto
    if(nombre.length > 0 && apellido.length > 0){
        var mensaje = "Nombre y apellido: " + nombre + " " + apellido;
    } else{
        var mensaje =  "Nombre y/o apellido no se han completado";
    }
    
    // Escribimos el mensaje en el elemento cuya id es respuesta
    document.getElementById("respuesta").innerHTML = mensaje;
}