/* Ejercicio 2.4

Dado el siguiente codigo:

1 Añadir anotaciones de tipo (‘any‘ excluido)
2 Inspeccione el tipo de ‘element‘ en diferentes ramas de código
3 Bonificación: convertir ‘flatten‘ en una función genérica */

const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array: (number | number[])[]) {
    const flattened: number[] = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            element;
            flattened.push(...element);
        } 
        else {
            element;
            flattened.push(element);
        }
    }
    return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log('[Ejercicio 2.4]', flattenedNumbers);
