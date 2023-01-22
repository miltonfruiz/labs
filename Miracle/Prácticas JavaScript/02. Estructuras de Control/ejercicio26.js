/* 26. Crea una función que reciba una cadena y lo devuelva con todas las palabras con su
primera letra mayúscula

function primeraMayuscula(str) {
}

console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');*/

function primeraMayuscula(str) {
    let palabra = str.split(' ').map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1);
    })
    return palabra.join(' ');
}

console.log(primeraMayuscula('en un lugar de la mancha'));