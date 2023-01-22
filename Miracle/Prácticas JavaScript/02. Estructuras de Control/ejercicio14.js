/* 14. Crear una función que reciba un arreglo de números enteros positivos desordenados y
devuelva otro arreglo con los números ordenados.*/

function ordenados(array) {
    return array.sort((a, b) => a - b);
}

console.log(ordenados([25,65,48,78,95,21,13]));