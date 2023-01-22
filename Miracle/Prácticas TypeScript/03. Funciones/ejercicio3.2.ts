/* Ejercicio 3.2

Dado el siguiente codigo:

1 Agregue tipos explícitos a los parámetros y el tipo de retorno a la funcion ‘deposit‘
2 Haz que el parámetro de ‘message‘ sea *optional
1 const bankAccount = {
2 money: 0,
3 deposit(value, message) {
4 this.money += value;
5 if (message) {
6 console.log(message);
7 }
8 }
9 };
10
11 bankAccount.deposit(20);
12 bankAccount.deposit(10, 'Deposit received')
13
14 console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);*/

// Resolución

const bankAccount = {
    money: 0,
    deposit(value: number, message?: string): void {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
};
bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');

console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);