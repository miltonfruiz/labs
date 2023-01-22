/* Ejercicio 5.4

El propósito de este ejercicio es simplemente ilustrar el uso de ‘readonly‘:*/ 

interface EsquemaUsuario {
    readonly id: number;
    nombre: string;
}
class Usuario implements EsquemaUsuario {
    constructor(public nombre: string, readonly id: number) { }
}
const usuario = new Usuario('Perro', 1);

console.log(usuario.id); // legible

usuario.nombre = 'Harold'; // asignable

// usuario.id = 5; no asignable

console.log('[Ejercicio 2.4]', `Usuario:`, usuario)

/* Archivo JS 

var Usuario = @class (function () {
    function Usuario(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    return Usuario;
}());
var usuario = new Usuario('Perro', 1);
console.log(usuario.id); // legible
usuario.nombre = 'Harold'; // asignable
// usuario.id = 5; no asignable
console.log('[Ejercicio 2.4]', "Usuario:", usuario); */