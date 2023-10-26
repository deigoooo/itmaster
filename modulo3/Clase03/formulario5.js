// Los números de socios válidos van desde 1000 a 5000 (inclusive)

var presultado = document.getElementById("resultado");

function validar(){
    var nsocio = document.getElementById("nsocio").value;

    if(nsocio >=1000 && nsocio <=5000){
        presultado.innerHTML = '<strong class="exito"><i class="fa-solid fa-circle-check"></i> El número '+nsocio+' de socio es válido en el rango solicitado</strong>';
    } else{
        presultado.innerHTML = '<strong class="error"><i class="fa-solid fa-triangle-exclamation"></i> El número '+nsocio+' de socio NO es válido en el rango solicitado</strong>'
    }

}