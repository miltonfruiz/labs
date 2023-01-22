/* Ejercicio 3.4

Dado el siguiente codigo:

1 Añadir tipos explícitos a los parámetros y tipo de retorno
2 Añadir un saludo predeterminado: ”hola”

1 function greet(greeting) {
2 return greeting.toUpperCase();
3 }
4
5 const defaultGreeting = greet();
6 const portugueseGreeting = greet('Oi como vai!');
7
8 console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting); */

// Resolución

function greet(greeting: string): string {
    return greeting.toUpperCase();
}
const defaultGreeting: string = greet('Hola!');
const portugueseGreeting: string = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);

/* Archivo JS

function greet(greeting) {
    return greeting.toUpperCase();
}
var defaultGreeting = greet('Hola!');
var portugueseGreeting = greet('Oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting); */