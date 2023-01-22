/* 1. Utilizando clases implemente un árbol binario. Agregue métodos para recorrer el árbol en
orden, en pre-orden y en post-orden
   2. Implemente un método para contar el número de elementos en el árbol
   3. Implemente un método que permita encontrar el valor mínimo y máximo dentro de un
árbol */

class Nodo {
   constructor(data) {
      this.left = null;
      this.rigth = null;
      this.data = data;
   }
}
class Arbol {
   constructor() {
      this.raiz = null;
   }
   add(data) {
      let node = new Nodo(data);
      if (!this.raiz) {
         this.raiz = node;
         return;
      }
      let current = this.raiz;
      let prev = null;
      while (current) {
         if (current.data > node.data) {
            prev = current;
            current = current.left;
         } else {
            prev = current;
            current = current.rigth;
         }
      }
      if (prev) {
         if (node.data < prev.data) {
            current = node;
            prev.left = current;
         } else {
            current = node;
            prev.rigth = current;
         }
      }
   }
   preorden(nodo = this.raiz) {
      if (!nodo) 
      return;
      console.log(nodo === null || nodo === void 0 ? void 0 : nodo.data);
      this.preorden(nodo === null || nodo === void 0 ? void 0 : nodo.left);
      this.preorden(nodo === null || nodo === void 0 ? void 0 : nodo.rigth);
   }
   enorden(nodo = this.raiz) {
      if (!nodo) 
      return;
      this.enorden(nodo === null || nodo === void 0 ? void 0 : nodo.left);
      console.log(nodo === null || nodo === void 0 ? void 0 : nodo.data);
      this.enorden(nodo === null || nodo === void 0 ? void 0 : nodo.rigth);
   }
   postorden(nodo = this.raiz) {
      if (!nodo) 
      return;
      this.postorden(nodo === null || nodo === void 0 ? void 0 : nodo.left);
      this.postorden(nodo === null || nodo === void 0 ? void 0 : nodo.rigth);
      console.log(nodo === null || nodo === void 0 ? void 0 : nodo.data);
   }
   minValue() {
      let current = this.raiz;
      let minVal = null;
      while (current === null || current === void 0 ? void 0 : current.left) {
         current = current.left;
      }
      if (current) {
         minVal = current.data;
      }
      return minVal;
   }
   maxValue() {
      let current = this.raiz;
      let maxVal = null;
      while (
         current === null || current === void 0 ? void 0 : current.rigth
         ) {
            current = current.rigth;
         }
         if (current) {
            maxVal = current.data;
         }
         return maxVal;
      }
      size(nodo = this.raiz) {
         if (!nodo) 
         return 0;
         return 1 + this.size(nodo.left) + this.size(nodo.rigth);
      }
   }

let arbol = new Arbol();
arbol.add(8);
arbol.add(4);
arbol.add(2);

console.log('Arbol enorden:');
arbol.enorden();

console.log('Arbol preorden:');
arbol.preorden();

console.log('Arbol postorden:');
arbol.postorden();

console.log('Valor minimo: ', arbol.minValue());
console.log('Valor maximo: ', arbol.maxValue());

console.log('size', arbol.size());