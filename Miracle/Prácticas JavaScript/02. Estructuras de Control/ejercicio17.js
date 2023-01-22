/* 17. Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible
por divisor menor que limite. Ambos valores serán siempre enteros positivos.

function maximoDivisible (divisor, limite) {
}*/

function maximoDivisible(divisor, limite) {
    while(limite) {
        if (limite % divisor == 0) return limite;
        limite--;
    }
}

console.log(maximoDivisible(8, 16));