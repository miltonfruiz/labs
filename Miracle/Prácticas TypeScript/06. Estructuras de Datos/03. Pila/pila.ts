/* 1. Implemente una pila utilizando clases. Agregue los metodos push, pop y size
2. Utilice la clase anterior para convertir numeros decimales en binarios. Recuerde que para
convertir un número decimal en una representación binaria, podemos dividir el número
por 2 (el binario es un sistema numérico de base 2) hasta que el resultado de la división
sea 0
3. Podemos modificar el algoritmo anterior para que funcione como un conversor de decimales
a las bases entre 2 y 36. En lugar de dividir el número decimal por 2, podemos pasar la
base deseada como argumento al método y usarla en las operaciones de división */

class Stack {
    constructor() {
        this.stack = [];
    }
    push(data) {
        this.stack.push(data);
    }
    pop() {
        this.stack.pop();
    }
    size() {
        return this.stack.length;
    }
    convertToBase(n) {
        if (n < 2 || n > 32)
        return 'Base incorrecta';
        const dataConverted = [];
        this.stack.forEach((data) => {
            let num = Math.abs(data);
            let string = '';
            while (num !== 0) {
                string += Math.floor(num % n);
                num = Math.floor(num / n);
            }
            if (data === Math.abs(data)) {
                dataConverted.push(+string.split('').reverse().join(''));
            }
            else {
                dataConverted.push(-+string.split('').reverse().join(''));
            }
        });
        return dataConverted;
    }
    showData() {
        console.log('Stack', this.data);
    }
}
    
let stack = new Stack();

stack.push(15);
stack.push(4);
stack.push(-4);
stack.showData();

console.log(stack.convertToBase(2));
console.log(stack.convertToBase(9));
console.log('Stack size: ', stack.size());