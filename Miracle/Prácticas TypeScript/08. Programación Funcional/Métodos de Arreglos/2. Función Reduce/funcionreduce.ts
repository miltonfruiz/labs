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

//Función Reduce

// 1. Obtener la masa total de todos los personajes

const masaTotal = characters.reduce((total, peso) => 
total + parseInt(peso.mass)
 , 0
)
console.log('Masa total de todos los personajes',masaTotal,'kgs.');

//2. Obtener la altura total de todos los caracteres

const alturaTotal = characters.reduce((total, altura) => 
total + parseInt(altura.height)
 , 0
)
console.log('Altura total de todos los personajes',alturaTotal,'mts.');

//3. Obtener el número total de caracteres en todos los nombres de los personajes

const caracterTotal = characters.reduce((total, caracter) => 
total + caracter.name.length
 , 0
)
console.log(`Total número de caracteres en todos los personajes`,caracterTotal);

// 4. Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojos para contar)

const caracterTotalColor = characters.map((color) =>
color.eye_color.replace(/ /g, '').length
)
console.log('Carácteres por color de ojo: ',caracterTotalColor);