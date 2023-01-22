/* Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
obtiene el número más alto gana.

1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
menos mientras se este utilizando ese mazo.

2. Las cartas que saca cada jugador deben salir en orden aleatorio */

class Carta {
    palo: string;
    numero: number;
    constructor(palo: string = '', numero: number = 0) {
      this.palo = palo;
      this.numero = numero;
    }
}
  
  
class Mazo {
    cartas: Carta[];
    constructor() {
        this.cartas = [];
        let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let palos: string[] = ['Espada', 'Oro', 'Basto', 'Copa'];
        let carta: Carta;
        palos.forEach((palo) => {
            for (let i = 0; i < numeros.length; i++) {
                carta = new Carta(palo, numeros[i]);
                this.cartas.push(carta);
            }
        });
    }
    eliminar(index: number): void {
        this.cartas = [
            ...this.cartas.slice(0, index),
            ...this.cartas.slice(index + 1),
        ];
    }
    size(): number {
        return this.cartas.length;
    }
}
class Jugador {
    nombre: string;
    cartaSacada: Carta = new Carta();
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    sacar(mazo: Mazo) {
        let index = Math.floor(Math.random() * mazo.size());
        this.cartaSacada = mazo.cartas[index];
        mazo.eliminar(index);
    }
    mostrar(): void {
        console.log(
            `Carta de ${this.nombre}: ${this.cartaSacada.numero} de ${this.cartaSacada.palo}`);
        }
    }
  
const random = new Mazo();
const uno = new Jugador('Primer jugador');
const dos = new Jugador('Segundo Jugador');

function juego(uno: Jugador, dos: Jugador) {
    uno.sacar(random);
    dos.sacar(random);
    if (uno.cartaSacada.numero > dos.cartaSacada.numero) {
        uno.mostrar();
        dos.mostrar();
        console.log(`Ganador: ${uno.nombre}`);
    } else if (uno.cartaSacada.numero < dos.cartaSacada.numero) {
        uno.mostrar();
        dos.mostrar();
        console.log(`Ganador: ${dos.nombre}`);
    } else {
        uno.mostrar();
        dos.mostrar();
        console.log(`Empate`);
    }
}

console.log(juego(uno, dos));