/* Ejercicio 3.5

Dado el siguiente código:

1 Añadir anotación de tipo de parámetro
2 A pesar de que esta función no vuelve, agregue un tipo de retorno explícito

1 function layEggs(quantity, color) {
2 console.log(
3 `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
4 }
5
6 layEggs(); */

// Resolución

function layEggs(quantity: number, color: string): void {
    console.log(
        `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
    }

layEggs(4, 'Verde');

/* Archivo JS

function layEggs(quantity, color) {
    console.log("[Ejercicio 3.5] Acabas de poner ".concat(quantity, " huevos ").concat(color, ". Buen trabajo!"));
}
layEggs(4, 'Verde'); */