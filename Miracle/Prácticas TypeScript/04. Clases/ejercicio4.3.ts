/* Ejercicio 4.3

Dado el siguiente codigo:

1 Hacer que las propiedades de title y salary estén explícitamente disponibles públicamente
2 Reduzca la clase a tres líneas de código manteniendo la funcionalidad

1 class Employee {
2 title: string;
3 salary: number;
4 constructor(title: string, salary: number) {
5 this.title = title;
6 this.salary = salary;
7 }
8 }
9
10 const employee = new Employee('Ingeniero', 100000);
11
12 console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} y gana $ ${employee.salary}.`); */

// Resolución

class Employee {
    constructor(public title: string, public salary: number) {
        this.title = title;
        this.salary = salary;
    }
}
const employee = new Employee('Ingeniero', 100000);

console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} y gana $ ${employee.salary}.`);