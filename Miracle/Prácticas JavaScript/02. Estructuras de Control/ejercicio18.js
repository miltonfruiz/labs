/* 18. Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha
planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta
en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva
el número de días que tardará la planta en medir la alturaDeseada.

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
}*/

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while ( altura < alturaDeseada) {
        dias++;
        altura += velocidadCrecimiento;
        altura -= velocidadDecrecimiento;
    }
    return dias;
}

console.log(calcularDiasCrecimiento(6, 4, 10));