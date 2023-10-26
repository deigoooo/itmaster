function cambiarColor(){
    // const color = document.getElementById("color").value; //equivale a la línea de abajo para obtener el color del input type color cuya id es color

    const color = document.querySelector("#color").value;

    document.querySelector("#caja p").style.color = color;
}