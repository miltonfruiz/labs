/* 1. Implemente una lista enlazada utilizando clases. Agregue métodos add, remove, size y
find
2. Agrege el método invert que permita invertir los elementos de la lista
3. Utilizando herencia, implemente una lista doblemente enlazada (Las listas doblemente
enlazadas, ademas de poseer una referencia al proximo, tienen una referencia al elemento
anterior)
4. Agregue un método deleteDups que elimine los elementos duplicados de la list */

function listaEnlazada() {
    class Node {
        constructor(data, next = null, previous = null) {
            this.data = data;
            this.next = next;
            this.previous = previous;
            this.data = data;
            this.next = next;
            this.previous = previous;
        }
    }
    class LinkedList {
        constructor() {
            this.head = null;
            this.size = 0;
        }
        add(data) {
            let node = new Node(data);
            let current;
            if (!this.head) {
                this.head = node;
            }
            else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node; 
                node.previous = current; 
            }
            this.size++;
        }
        remove(value) {
            let current = this.head;
            let previous = null;
            while (current && current.data !== value) {
                previous = current;
                current = current.next;
            }
            if (!current) {
                return;
            }
            if (!previous) {
                this.head = current.next;
                if (this.head) {
                    this.head.previous = null;
                }
            }
            else {
                previous.next = current.next;
                if (current.next) {
                    current.next.previous = current.previous;
                }
            }
            console.log('Se elimina:', value);
            this.size--;
        }
        clearList() {
            this.head = null;
            this.size = 0;
        }
        printList() {
            let current = this.head;
            let array = [];
            while (current) {
                array.push(current.data);
                current = current.next;
            }
            console.log(array);
        }
        listSize() {
            return this.size;
        }
        find(value) {
            let current = this.head;
            let encontrado = false;
            while (current && current.data !== value) {
                current = current.next;
            }
            if (!current) {
                console.log('No se encontro', value);
                return encontrado;
            }
            else {
                console.log('Se encontro', value);
                return (encontrado = true);
            }
        }
        invert() {
            let current = this.head;
            let aux;
            while (current) {
                aux = current.next;
                current.next = current.previous;
                current.previous = aux;
                if (!current.previous) {
                    this.head = current;
                    return;
                }
                current = aux;
            }
        }
        deleteDups() {
            this.invert(); 
            let index = this.head;
            while (index) {
                let nodo1 = index.next;
                while (nodo1) {
                    if (nodo1.data == index.data) {
                        this.remove(nodo1.data);
                    }
                    nodo1 = nodo1.next;
                }
                index = index.next;
            }
            this.invert();
        }
    }
    let lista = new LinkedList();

    lista.add(1);
    lista.add(2);
    lista.add(3);
    lista.add(4);
    lista.add(5);
    lista.add(13);
    lista.printList();
    
    lista.find(13);
    console.log('Size:', lista.listSize());
    lista.remove(13);
    lista.printList();
    lista.find(13);
    console.log('Size:', lista.listSize());
    lista.add(6);
    lista.printList();
    lista.invert();
    lista.printList();
    lista.invert();
    lista.printList();
    
    lista.add(5);
    lista.add(4);
    lista.add(3);
    lista.add(2);
    lista.add(1);
    lista.add(0);
    lista.add(13);
    lista.add(3);
    lista.add(5);
    lista.add(2);
    
    lista.printList();
    lista.deleteDups();
    lista.printList();
    lista.clearList();
    lista.printList();
}
listaEnlazada();