/* 16. Crear una función que reciba como argumentos dos números y una operación (su nombre
como cadena) y que devuelva el resultado de aplicar dicha operación a los dos números
proporcionados
function calculadora(num1, num2, operador) {
}*/

function calculadora(num1, num2, operador) {
    switch(operador) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            return num1 / num2;
        case 'modulo':
            return num1 % num2;
    }
}

console.log(calculadora(2, 3, 'suma'));