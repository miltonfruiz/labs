/* Ejercicio 4.1

Dado el siguiente codigo:

1 Añadir tipo de parámetro de forma explícita en método ‘greet‘
2 Agregar el tipo de retorno explicito al metodo greet

1 class MC {
2 greet(event = 'party') {
3 return `Bienvenido al ${event}`;
4 }
5 }
6
7 const mc = new MC();
8 console.log('[Ejercicio 5.1]', mc.greet('espectaculo')); */

// Resolución

class MC {
    greet(event: string = 'party'): string {
        return `Bienvenido al ${event}`;
    }
}
const mc = new MC();

console.log('[Ejercicio 4.1]', mc.greet('espectaculo'));

/* Archivo JS

var MC =  @class (function () {
    function MC() {
    }
    MC.prototype.greet = function (event) {
        if (event === void 0) { event = 'party'; }
        return "Bienvenido al ".concat(event);
    };
    return MC;
}());
var mc = new MC();
console.log('[Ejercicio 5.1]', mc.greet('espectaculo')); */
