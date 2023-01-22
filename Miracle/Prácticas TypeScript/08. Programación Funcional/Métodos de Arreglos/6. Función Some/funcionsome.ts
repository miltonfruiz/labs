// Dada el siguiente arreglo:

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];

//Función Some

// 1. ¿Hay al menos un personaje masculino?

const pjMasculino = characters.some((valor) =>
valor.gender === 'male');
console.log(pjMasculino);

//2. ¿Hay al menos un personaje con ojos azules?

const pjOjoAzul = characters.some((valor) =>
valor.eye_color === 'blue');
console.log(pjOjoAzul);

//3. ¿Hay al menos un personaje más alto que 200?

const pjSuperior = characters.some(valor => +valor.height > 100 ? true : false);
console.log(pjSuperior);

// 4. ¿Hay al menos un personaje que tenga una masa inferior a 50?

const pjInferior = characters.some(valor => +valor.mass < 50 ? true : false);
console.log(pjInferior);