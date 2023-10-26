// Esta variable queda apuntada el elemento cuya id es resultado
var divresultado = document.getElementById("resultado");

function sumar(){
    // Obtenemos los dos números del formulario y los pasamos a tipo numérico
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    // para este ejemplo validamos que ambos números obtenidos del formulario sean positivos, mayores a cero

    if(n1 > 0 && n2 > 0){
        var resultado = n1 + n2;
        divresultado.innerHTML = resultado;
    } else{
        divresultado.innerHTML = "Ambos números deben ser positivos" 
    }

}