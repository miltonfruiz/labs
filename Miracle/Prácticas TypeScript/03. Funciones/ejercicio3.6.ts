/* Ejercicio 3.6

Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos
funciones.

1 Arreglar los errores

1 let multiply: (val1: number, val2: number) => number;
2 let capitalize: (val: string) => string;
3
4 multiply = function (value: string): string {
5 return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
6 }
7
8 capitalize = function (x: number, y: number): number {
9 return x * y;
10 }
11
12 console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`)); */

// Resolución

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
multiply = function (x: number, y: number): number {
    return x * y;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`)); 

/* Archivo JS

var multiply;
var capitalize;
capitalize = function (value) {
    return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
};
multiply = function (x, y) {
    return x * y;
};
console.log('[Ejercicio 3.6]', capitalize("habil ".concat(multiply(5, 10))));*/