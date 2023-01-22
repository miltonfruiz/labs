/* 22. Escribe una función que simule el lanzamiento de una moneda al aire y devuelva si ha
salido cara o cruz. Podemos utilizar el objeto Math
function azarMoneda() {
}
azarMoneda();*/

function azarMoneda() {
    return Math.round(Math.random())? 'Cara' : 'Cruz';
}

console.log(azarMoneda());