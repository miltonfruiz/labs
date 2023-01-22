/* Ejercicio 5.2

Dado el siguiente codigo:

1 Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso
a las propiedades miembros ‘nombre‘ y ‘edad‘

1 class Persona {
2 constructor(public nombre: string, public edad: number) { }
3 }
4
5 const juan = new Persona('Juan', 31);
6
7 console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`); */

// Resolución

interface Modelo {
    nombre: string;
    edad: number;
}

class Persona implements Modelo {
    constructor(public nombre: string, public edad: number) { }
}
const juan = new Persona('Juan', 31);

console.log('[Ejercicio 5.2]', `${juan.nombre} tiene ${juan.edad} anios.`); 

/* Archivo JS

var Persona = @class (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
var juan = new Persona('Juan', 31);
console.log('[Ejercicio 5.2]', "".concat(juan.nombre, " tiene ").concat(juan.edad, " anios.")); */
