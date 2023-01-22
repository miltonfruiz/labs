/* 2. Encuentra la diferencia simétrica.

El término matemático diferencia simétrica (sim) de dos conjuntos es el conjunto de ele
mentos que están en cualquiera de los dos conjuntos pero no en ambos. Por ejemplo, para
conjuntos A = {1, 2, 3} y B = {2, 3, 4}, A sim B = {1, 4}.

La diferencia simétrica es una operación binaria, lo que significa que opera solo en dos
elementos. Entonces, para evaluar una expresión que involucra diferencias simétricas entre
tres elementos (A sim B sim C), debemos completar una operación a la vez. Así, para los
conjuntos A y B anteriores, y C = {2, 3}, A sim B sim C = (A sim B) sim C = {1, 4}
sim {2, 3} = {1, 2, 3, 4}.

Cree una función que tome dos o más matrices y devuelva una matriz de su diferencia
simétrica. La matriz devuelta debe contener solo valores únicos (sin duplicados).
Podemos realizar las siguientes pruebas para verificar el correcto funcionamiento:

sym([1, 2, 3], [5, 2, 1, 4]) debe devolver [3, 4, 5]
sym([1, 2, 3], [5, 2, 1, 4]) debe contener solo tres elementos
sym([1, 2, 3, 3], [5, 2, 1, 4]) debe devolver [3, 4, 5]
sym([1, 2, 3, 3], [5, 2, 1, 4]) debe contener solo tres elementos
sym([1, 2, 3], [5, 2, 1, 4, 5]) debe devolver [3, 4, 5]
sym([1, 2, 3], [5, 2, 1, 4, 5]) debe contener solo tres elementos
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) debe devolver [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) debe contener solo tres elementos
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) debe devolver [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) debe devolver solo tres elementos
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) debe devolver [2, 3, 4, 6, 7]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) debe contener solo cinco elementos
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) debe devolver [1, 2, 4, 5, 6, 7, 8, 9]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) debe contener solo ocho elementos */

function sym(...matrices) {
    let diferencia = new Set;
    for(let matriz of matrices)
    for(let elemento of new Set(matriz)) {
        diferencia.has(elemento) ? diferencia.delete(elemento) : diferencia.add(elemento)
    }
    return Array.from(diferencia).sort((a, b) => a - b);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));