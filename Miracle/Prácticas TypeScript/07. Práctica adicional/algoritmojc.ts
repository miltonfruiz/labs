/* Algoritmo de Julio Cesar

1. Armar un programa que realice la codificación y decodificación de una cadena utilizando
para ello el método de Julio Cesar. Dicho algoritmo consiste en correr una cantidad de
caracteres determinado hacia la derecha un mensaje dado.

Ejemplo:

La transformación se puede representar alineando dos alfabetos; el alfabeto cifrado es
un alfabeto normal que está desplazado un número determinado de posiciones hacia la
izquierda o la derecha. Por ejemplo, aquí el cifrado César está usando un desplazamiento
de seis espacios hacia la derecha:

• Texto original: ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
• Texto codificado: GHIJKLMNÑOPQRSTUVWXYZABCDEF

Para codificar un mensaje, simplemente se debe buscar cada letra de la línea del texto
original y escribir la letra correspondiente en la línea codificada. Para decodificarlo se
debe hacer lo contrario.

• Texto original: WIKIPEDIA, LA ENCICLOPEDIA LIBRE
• Texto codificado: CÑPÑVKJÑG, QG KSIÑIQUVKJÑG QÑHXK

Armar un algoritmo de codificación inventado por el primo de Julio Cesar que además de
la codificación anterior invertía el String final. Armar un bloque de código de prueba.*/

/*2. Reutilizando el codigo anterior, implemente un algoritmo similar, que antes de aplicar la
codificacion de Julio César invierta el texto original */

function algoritmo(texto, desplazamiento) {
  let cifrado = '';
  let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  desplazamiento = (desplazamiento % 26 + 26) % 26;

   if (texto) {
    for (let i = 0; i < texto.length; i++){
      if (alfabeto.indexOf(texto[i]) != -1){
        let posicion = ((alfabeto.indexOf(texto[i]) + desplazamiento) % 26);
        cifrado += alfabeto[posicion];
      }
      else
        cifrado += texto[i];
    }
   }
   return cifrado;
}

console.log(algoritmo('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 6)); //# Cifrado
console.log(algoritmo('DÑPÑVKJÑG, QG KSIÑIQUVKJÑG QÑHXK', -6)); //# Descrifrado