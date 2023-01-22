/* 27. Crea una función que reciba una cadena y la devuelva en camelCase
function camelize(str) {
}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');*/

function camelize(str) {
    devolucion = '';
    str.split(' ').forEach((palabra, i) => {
        if (i === 0) {
            devolucion += palabra.toLowerCase()
        } else {
            devolucion += palabra[0].toUpperCase() + palabra.substring(1)
        }
    });
    return devolucion;
}

console.log(camelize('Hola a todos que tal'));