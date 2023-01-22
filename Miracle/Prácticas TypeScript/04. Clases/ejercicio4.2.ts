/* Ejercicio 4.2

Dado el siguiente codigo:

1 Añadir tipos de parámetros explícitos al constructor
2 Agregue parámetros con tipos para almacenar valores

1 class Person {
2 constructor(name, age) {
3 this.name = name;
4 this.age = age;
5 }
6 }
7
8 const jane = new Person('Juan', 31);
9
10 console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.name}.`); */

// Resolución

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Juan', 31);

console.log('[Ejercicio 4.2]', `El nombre de la nueva persona es ${jane.name}.`);

/* var Person = @class (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var jane = new Person('Juan', 31);
console.log('[Ejercicio 4.2]', "El nombre de la nueva persona es ".concat(jane.name, ".")); */