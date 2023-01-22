/* Ejercicio 3.1

Dado el siguiente codigo:

1 Agregue tipos explícitos a los parámetros y el tipo de retorno
2 Solucione cualquier error resultante de tipos inválidos

1 function add(x, y) {
2 return x + y;
3 }
4
5 function sumArray(numbers) {
6 return numbers.reduce(add, 0);
7 }
8
9 const someSum = sumArray(['3', '6', '9']);
10
11 console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`); */

// Resolución

function add(x: number, y: number): number {
    return x + y;
}
function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}
const someSum = sumArray([3, 6, 9]);

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);

/* Archivo JS

function add(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
var someSum = sumArray([3, 6, 9]);
console.log('[Ejercicio 3.1]', "3 + 6 + 9 === ".concat(someSum)); */