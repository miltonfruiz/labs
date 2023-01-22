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

//Función Filter

// 1. Obtener personajes con masa superior a 100

const superior = characters.filter(item => +item.mass > 100 ? true : false);
console.log(superior);

//2. Obtener personajes con una altura inferior a 200

const inferior = characters.filter(item => +item.height < 200 ? true : false);
console.log(inferior);

//3. Obtener todos los personajes masculinos

const masculinos = characters.filter(item => item.gender === 'male' ? true : false);
console.log(masculinos);

// 4. Obtener todos los personajes femeninos

const femeninos = characters.filter(item => item.gender === 'female' ? true : false);
console.log(femeninos);