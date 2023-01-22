/* Ejercicio 2.3

Dado el siguiente codigo:
1
2 function padLeft(value: string, padding: number | string): string {
3 // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
4 // si padding es una cadena, return padding + value
5 }
6
7 console.log('[Ejercicio 4.2]', `
8 ${padLeft('', 0)}
9 ${padLeft('', '')}
10 ${padLeft('', '')}
11 ${padLeft('', '')}
12 ${padLeft('', '')}
13 `);
1 Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘ */

// Resolución

function padLeft(value: string, padding: number | string): string {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    else {
        return padding + value;
    }
}

console.log('[Ejercicio 2.2]', `
${padLeft('', 0)}
${padLeft('', '1')}
${padLeft('', 2)}
${padLeft('', '3')}
${padLeft('', 4)}
`);