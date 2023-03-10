/* Ejercicio 2.1

TypeScript es inteligente sobre los posibles tipos de una variable, dependiendo de la ruta del
código.

Dado el siguiente codigo: */

function doStuff(value: any): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
        console.log(value.toPrecision(5));
    }
    
    value; // coloque el cursor sobre `valor` aqui
}

doStuff(2);
doStuff(22);
doStuff(222);
doStuff('hello');
doStuff(true);
doStuff({});

console.log('[Ejercicio 2.1]');


/* 1 Simplemente inspeccione los tipos posibles moviéndose sobre el ’texto’ para ver cómo
cambia el tipo inferido si se pueden hacer suposiciones de forma segura sobre los tipos
posibles dentro de la ruta del código dado */
