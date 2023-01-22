/* 35. Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argu
mentos y devuelva un arreglo de solo los argumentos únicos.*/

function onlyUniques(...argumentos) {
    return new Set(argumentos);
}

console.log(onlyUniques(1,'a',2,'b',1,'a',2,'b'));