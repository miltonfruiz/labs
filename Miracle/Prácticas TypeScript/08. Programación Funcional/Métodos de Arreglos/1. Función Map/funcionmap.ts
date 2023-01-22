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

//Función map

// 1. Obtener un arreglo de todos los nombres

const nombres = characters.map((item) => item.name);
console.log(nombres);

//2. Obtener un arreglo de todas las alturas

const alturas = characters.map((item) => ({
    nombre: item.name,
    altura: item.height,
}))
console.log(alturas);

//3. Obtener un arreglo de objetos con las propiedades de nombre y altura

const objetos = characters.map((item) => item.height);
console.log(objetos);

// 4. Obtener un arreglo de todos los nombres (repite punto 1)
