function cambiarColor(){
    // const color = document.getElementById("color").value; //equivale a la línea de abajo para obtener el color del input type color cuya id es color

    const color = document.querySelector("#color").value;

    // document.querySelectorAll crea un array con los párrafos de caja
    const parrafos = document.querySelectorAll("#caja p");
    
    const cantidad = parrafos.length;
    console.log("Parrafos dentro de la caja:" + cantidad);

    for(let parrafo of parrafos){
        parrafo.style.color = color;
    }

    /*
        for(i=0;i<cantidad;i++){
            parrafos[i].style.color = color;
        }
    */
}