// 1. Verifique si hay duplicados en un arreglo de enteros usando Set.

var arreglo = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4];
var repetidos = [...new Set(arreglo)];

console.log(repetidos); // [1,2,3,4,5]

/*  2. Dados dos arreglos de enteros donde puede haber algunos valores duplicados entre los
mismos, devuelva un arreglo que tenga todos los elementos únicos de los dos arreglos
originales. */

var arreglo1 = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4];
var arreglo2 = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4];

var unicos = [...new Set([...arreglo1, ...arreglo2])];

console.log(unicos);

/* 1. Verifique si hay duplicados en un arreglo de enteros usando Set.

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var arreglo = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4];
var repetidos = __spreadArray([], new Set(arreglo), true);
console.log(repetidos); // [1,2,3,4,5]

/*  2. Dados dos arreglos de enteros donde puede haber algunos valores duplicados entre los
mismos, devuelva un arreglo que tenga todos los elementos únicos de los dos arreglos
originales.

var arreglo1 = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4];
var arreglo2 = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4];
var unicos = __spreadArray([], new Set(__spreadArray(__spreadArray([], arreglo1, true), arreglo2, true)), true);

console.log(unicos); */