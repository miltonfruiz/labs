/* 23. Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre
los dos suman 10
function azarDados() {
}
azarDados();*/

function azarDados() {
    contador = 0;
    for (let i = 0; i < 100; i++) {
        let tiradas = Math.round(Math.random()*6) + Math.round(Math.random()*6);
        if (tiradas == 10) {
            contador++;
        }
    }
    return contador;
}

console.log(azarDados());