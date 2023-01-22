/* 33. Escriba una función llamada countTheArgs que pueda tomar cualquier cantidad de argu-
mentos y devuelva la cantidad de argumentos que se pasan.*/

function countTheArgs(...argumentos) {
    return argumentos.length;
}

console.log(countTheArgs(1,'uno',2,'dos',3,'tres'));