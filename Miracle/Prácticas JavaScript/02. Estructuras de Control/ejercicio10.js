/* 10. Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr
function sum(arr, n) { }*/

function sum(arr, n) {
    let indice = n - 1;
    let suma = arr[indice];
    if (indice > 0) {
        suma += sum(arr, indice)
    }
    return suma;
}

console.log(sum([0,1,2,3], 4));