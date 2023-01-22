/* Ejercicio 1.4

Dado el siguiente codigo:

1 Añadir anotaciones de tipo (lo más explícitas posible)
2 Solucionar errores (si corresponde)

1 const entero = 6;
2 const decimal = 6.66;
3 const hexadecimal = 0xf00d;
4 const binario = 0b1010011010;
5 const octal = 0o744;
6 const ceroNegativo = -0;
7 const enRealiadadNumero = NaN;
8 const mayorNumero = Number.MAX_VALUE;
9 const elNumeroMasGrande = Infinity;
10
11 const miembros: any[] = [
12 entero,
13 decimal,
14 hexadecimal,
15 binario,
16 octal,
17 ceroNegativo,
18 enRealiadadNumero,
19 mayorNumero,
20 elNumeroMasGrande
21 ];
22
23 miembros[0] = '12345';
24
25 console.log('[Ejercicio 1.4]', miembros); */

// Resolución

const entero: number = 6;
const decimal: number = 6.66;
const hexadecimal: number = 0xf00d;
const binario: number = 0b1010011010;
const octal: number = 0o744;
const ceroNegativo: number = -0;
const enRealiadadNumero: number = NaN;
const mayorNumero: number = Number.MAX_VALUE;
const elNumeroMasGrande: number = Infinity;

const miembros: any[] = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
];
miembros[0] = '12345';

console.log('[Ejercicio 1.4]', miembros);

/* Archivo JS

var entero = 6;
var decimal = 6.66;
var hexadecimal = 0xf00d;
var binario = 666;
var octal = 484;
var ceroNegativo = -0;
var enRealiadadNumero = NaN;
var mayorNumero = Number.MAX_VALUE;
var elNumeroMasGrande = Infinity;
var miembros = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
];
miembros[0] = '12345';
console.log('[Ejercicio 1.4]', miembros); */