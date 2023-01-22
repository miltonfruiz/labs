/* Ejercicio 5.1
Dado el siguiente codigo:

1 Crea una interfaz ‘CartItem‘ y reemplaza el tipo de parametros con ella
2 Hacer idVariante opcional

1 function agregarAlCarro(item: { id: number, titulo: string, idVariante: number }) {
2 console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
3 }
4
5 agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' }); */

// Resolución

interface CartItem {
    id: number;
    titulo: string;
    idVariante?: number;
}

function agregarAlCarro(item: CartItem) {
    console.log('[Ejercicio 5.1]', `Agregando "${item.titulo}" al carro de compras.`);
}

agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });

/* Archivo JS 

function agregarAlCarro(item) {
    console.log('[Ejercicio 5.1]', "Agregando \"".concat(item.titulo, "\" al carro de compras."));
}
agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' }); */