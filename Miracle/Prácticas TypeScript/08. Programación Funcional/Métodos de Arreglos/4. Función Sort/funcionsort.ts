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

//Función Sort

// 1. Ordenar por nombre

const nombres = characters.map((nombre) => nombre.name);
console.log(nombres.sort());

//2. Ordenar por masa

const masas = characters.map((masa)=> +masa.mass);
const ordenoMasa = masas.sort(function(a, b){return a - b});
console.log(ordenoMasa);

//3. Ordenar por altura

const alturas = characters.map((altura)=> +altura.height);
const ordenoAltura = alturas.sort(function(a, b){return a - b});
console.log(ordenoAltura);

// 4. Ordenar por genero

const generos = characters.map((genero)=> genero.gender);
const ordenoGenero = generos.sort()
console.log(ordenoGenero);