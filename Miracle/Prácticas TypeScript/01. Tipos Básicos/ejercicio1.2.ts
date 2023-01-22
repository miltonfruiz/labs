/* Ejercicio 1.2
Dado el siguiente codigo:
1 Inspeccionar el tipo de ‘torta‘
2 Añadir una anotación de tipo explícito a ‘torta‘
3 Intenta asignar tipos inválidos, por diversión

1 let torta;
2 torta = 'arandanos';
3
4 console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);
*/

// Resolución

let torta: string;
torta = 'arandanos';

console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);

/* Archivo JS

var torta;
torta = 'arandanos';
console.log('[Ejercicio 1.2]', "Me gusta comer torta con sabor a ".concat(torta, "."));*/
