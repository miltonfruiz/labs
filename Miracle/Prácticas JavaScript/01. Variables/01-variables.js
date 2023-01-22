/* Variables

1. Crea una variable y una constante con los identificadores que desees. Inicializalas en lineas
posteriores.*/

function divi(arreglo, num) {
    let ndiv = []
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] % num) {
            ndiv.push(arreglo[i]);
        }
    }
    return ndiv;
}
console.log(divi(10,10));