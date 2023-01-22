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

//Función Every

// 1. ¿Todos los personajes tienen ojos azules?

const chequeoOjo = characters.every(({eye_color}) => (
    eye_color === 'blue'
    ))
console.log(chequeoOjo);

//2. ¿Todos los personajes tienen una masa superior a 40?

const chequeoMasa = characters.every(({mass}) => (
    +mass > 40 ? true : false
    ))
console.log(chequeoMasa);

//3. ¿Todos los personajes son más bajos que 200?

const chequeoAltura = characters.every(({height}) => (
    +height < 200 ? true : false
    ))
console.log(chequeoAltura);

// 4. ¿Todos los personajes son hombres?

const chequeoGenero = characters.every(({gender}) => (
    gender === 'male' ? true : false
    ))
console.log(chequeoGenero);