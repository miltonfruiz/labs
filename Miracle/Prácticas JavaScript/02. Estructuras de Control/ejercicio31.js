/* 31. Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma
de todos los argumentos.*/

function tomar(...numero) {
    return numero.reduce((prev, next) => prev + next, 0);
}

console.log(tomar(59,48,37,26,15,04));