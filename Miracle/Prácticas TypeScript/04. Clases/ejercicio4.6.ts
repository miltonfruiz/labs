/* Ejercicio 4.6

Dado el siguiente codigo:

1 Elimine el error sin cambiar las referencias a ‘Student.school‘

1 class Student {
2 public school: string = 'Harry Herpson High School';
3 constructor(private name: string) { };
4 introduction() {
5 console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
6 }
7 }
8
9 const student = new Student('Morty');
10 console.log(Student.school);
11 student.introduction(); */

// Resolución

class Student {
    static school: string = 'Harry Herpson High School';
    constructor(private name: string) { };
    introduction() {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
    }
}
const student = new Student('Morty');
console.log(Student.school);
student.introduction();

/* Archivo JS 

var Student = @class (function () {
    function Student(name) {
        this.name = name;
    }
    ;
    Student.prototype.introduction = function () {
        console.log('[Ejercicio 5.6]', "Hola, mi nombre es ".concat(this.name, " y asisto a ").concat(Student.school));
    };
    Student.school = 'Harry Herpson High School';
    return Student;
}());
var student = new Student('Morty');
console.log(Student.school);
student.introduction(); */