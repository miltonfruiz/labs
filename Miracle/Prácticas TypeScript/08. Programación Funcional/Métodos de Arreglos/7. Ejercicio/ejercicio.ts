// Dado el siguiente arreglo:

const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1. Mapealo a un arreglo de strings: firstName-lastName: role

const arreglo = users.map(({firstName, lastName, role}) => ({[`${firstName} ${lastName}`]: role}));
console.log('Ejercicio 1',arreglo);

// 2. Filtra aquellos usuarios con role de Full Stack Resident

const resident = users.filter(valor => valor.role === "Full Stack Resident");
console.log('Ejercicio 2',resident);

// 3. Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo 
// con los objetos usuarios que tienen dicho role

const objeto = users.reduce(( propiedad: any, valor ) => {
    if ( propiedad.hasOwnProperty(valor.role) ) {
        propiedad[valor.role] = [...propiedad[valor.role], valor]
    } else {
        propiedad[valor.role] = [valor];
    }
    return propiedad;
},
{})
console.log('Ejercicio 3',objeto);

// 4. Genera una función de búsqueda de un usuario por firstName con find

function busqueda(firstName) {
    return users.find((valor) => valor.firstName === firstName);
  };
console.log('Ejercicio 4',busqueda('Zach'));