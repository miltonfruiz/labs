/* Ejercicio 2.2

Dado el siguiente codigo: 

1 Restrinja el tipo de ‘valor‘ a ‘string o number‘
2 Solucione cualquier error resultante */

interface EggLayer {
    layEggs(): void;
}
interface Flyer {
    fly(height: number): void;
}
interface Swimmer {
    swim(depth: number): void;
}

type BirdLike = Flyer;
type FishLike = Swimmer;

class Bird implements BirdLike {
    constructor(public species: string) { }
    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }
    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish implements FishLike {
    constructor(public species: string) { }
    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal() {
    const animals: (Bird | Fish) [] = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal: Animal = getRandomAnimal()): Animal['species'] {
    if (animal instanceof Bird) {
        animal.fly(10);
    }
    if (animal instanceof Fish) {
        animal.swim(10);
    } 

    return animal.species;
}

console.log('[Ejercicio 2.2]',
`Tenemos un ${interrogateAnimal()} en nuestras manos!`);
