/* Ejercicio 1.5

Dado el siguiente codigo:

1 Añadir anotaciones de tipo (lo más explícitas posible)
2 Solucionar errores (si corresponde)

1 const secuencia = Array.from(Array(10).keys());
2 const animales = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
3 const cadenasYNumeros = [1, 'uno', 2, 'dos', 3, 'tres'];
4 const todosMisArreglos = [secuencia, animales, cadenasYNumeros];
5
6 console.log('Ejercicio 1.5', todosMisArreglos);*/

// Resolución

const secuencia: number[] = Array.from(Array(10).keys());
const animales: string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros: (number | string)[] = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos: (number | string)[][] = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);

/* Archivo JS

var secuencia = Array.from(Array(10).keys());
var animales = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
var cadenasYNumeros = [1, 'uno', 2, 'dos', 3, 'tres'];
var todosMisArreglos = [secuencia, animales, cadenasYNumeros];
console.log('Ejercicio 1.5', todosMisArreglos); */