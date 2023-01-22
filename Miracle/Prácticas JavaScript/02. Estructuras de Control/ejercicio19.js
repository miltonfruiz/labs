/* 19. Crea una función que devuelva el perímetro de un círculo a partir de su radio:
function perimetroCirculo(r) {
}
console.assert(perimetroCirculo(3) === 18.84955592153876);
console.assert(perimetroCirculo(6) === 37.69911184307752);*/

function perimetroCirculo(r) {
    return r * Math.PI * 2;
}

console.log(perimetroCirculo(3));
console.log(perimetroCirculo(6));