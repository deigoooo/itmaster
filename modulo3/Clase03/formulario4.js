// Esta variable queda apuntada el elemento cuya id es resultado
var divresultado = document.getElementById("resultado");

function convertir(){
    var cm = document.getElementById("cm").value;

    var metros = cm / 100;
    var pulgadas = cm / 2.54;

     // innerHTML escribe sobre el elemento elegido. Si existía algo lo borra. Con innerHTML puedo esciribir etiquetas html como <br>
     
     // Con toFixed indicamos la cantidad de decimales, en este caso 2

    divresultado.innerHTML = cm +" cm en metros es "+metros.toFixed(2)+" metros.<br> En pulgadas es: "+ pulgadas.toFixed(2) + " pulgadas";
}