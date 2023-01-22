/* 32. Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argu-
mentos (incluidos números o cadenas) y devuelva la suma de solo los números.*/

function addOnlyNums(...val) {
    return val.reduce((prev, next) => (prev + (typeof next === 'number' ? next : 0)), 0);
}
console.log(addOnlyNums(1,'a',2,'b',3,'c',4,'d',5,'e'))