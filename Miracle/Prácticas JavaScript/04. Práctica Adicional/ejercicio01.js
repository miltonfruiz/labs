/* 1. Valor más cercano

Encuentre el valor más cercano a un valor dado.
Se proporciona una lista de valores en forma de arreglo y un valor para el que se necesita
encontrar el más cercano.

Por ejemplo, tenemos el siguiente conjunto de números: 4, 7, 10, 11, 12, 17, y necesitamos encontrar el valor más cercano al número 9. Si ordenamos este conjunto en orden
ascendente, entonces a la izquierda del número 9 estará el número 7 ya la derecha estará el
número 10. El número 10 está más cerca que 7, lo que significa que la respuesta correcta
es 10.

Algunas aclaraciones:

• Si 2 números están a la misma distancia, debe elegir el más pequeño
• El conjunto de números nunca está vacío, es decir, el tamaño es >=1
• El valor dado puede estar en el conjunto, lo que significa que es la respuesta
• El conjunto puede contener números tanto positivos como negativos, pero siempre
son enteros
• El conjunto no está ordenado y consta de números únicos (no repetidos)
Entrada: dos argumentos. Una lista de valores en forma de arreglo. El valor buscado es
un int.

Podemos realizar las siguientes pruebas para verificar el correcto funcionamiento:

nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
nearestValue([4, 7, 10, 11, 12, 17], 0) == 4 */

function nearestValue(arreglo, num){
	const conjunto = [...arreglo].sort((a,b)=> a-b);
	let i = 1;
  const rango = conjunto.length;
	for(; i < rango && conjunto[i] < num; i++);
	return  conjunto[i] - num < num - conjunto[i - 1] ? conjunto[i] : conjunto[i - 1];
}

console.log(nearestValue([4, 7, 10, 11, 12, 17], 8));