/* 20. Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
}
console.assert(areaCirculo(2) === 12.566370614359172);
console.assert(areaCirculo(8) === 201.06192982974676);*/

function areaCirculo(r) {
    return r * r * Math.PI;
}

console.log(areaCirculo(2));
console.log(areaCirculo(8));