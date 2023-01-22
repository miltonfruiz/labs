/* 25. Crea una función que reciba una frase como cadena y devuelva la palabra más larga:
function palabraMasLarga(str) {
}
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');*/

function palabraMasLarga(str) {
    let palabra = str.split(" ");
    let masLarga = palabra[0];
    for (let i = 1; i < palabra.length; i++) {
        if (palabra[i].length > masLarga.length) {
            masLarga = palabra[i];
        }
    }
    return masLarga;
}

console.log(palabraMasLarga('Erase una vez que se era'));
console.log(palabraMasLarga('A la grande le puse cuca'));