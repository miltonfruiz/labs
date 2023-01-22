/* 24. Crea una función que reciba una cadena y un número n y devuelva la cadena repetida n
veces:

function repite(str, n) {
}

console.assert(repite('Batman ', 3) === 'Batman Batman Batman ');*/

function repite(str, n) {
    return str.repeat(n);
}

console.log(repite('Batman ', 3));