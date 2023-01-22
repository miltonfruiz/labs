/* 34. Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
y devuelva un solo arreglo que combine ambos (usando el operador ...)*/

function combineTwoArrays(uno, dos) {
    return [...uno, ...dos];
}

console.log(combineTwoArrays([1,2,3],[4,5,6]));