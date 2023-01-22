/* 21. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos
(Teorema de Pitágoras).
function hipotenusa(c1, c2) {
}
console.assert(hipotenusa(1, 2) === 2.23606797749979);*/

function hipotenusa(c1, c2) {
    return Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2));
}

console.assert(hipotenusa(1, 2));