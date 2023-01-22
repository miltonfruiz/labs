/* 1. Implemente una cola utilizando clases. Incorpore los métodos enqueue, dequeue y size
2. Las colas se aplican a menudo en informática y también en nuestras vidas. Existen algunas
versiones modificadas de la cola predeterminada que implementamos en el item anterior.
Una de las versiones modificadas es la cola circular. Un ejemplo de cola circular es el juego
de la Papa caliente. En este juego, los participantes se organizan en círculo y le pasan
la papa caliente a su vecino lo más rápido que pueden. En un momento determinado del
juego, la papa caliente deja de pasarse por el círculo y el jugador que tiene la papa caliente
es retirado del círculo. Esta acción se repite hasta que solo quede un jugador (el ganador).
Realice una implementación del juego. */

class Cola{
    items :any[];
    front :number;
    end :number;
 
    constructor(){
       this.items=[];
       this.front=0;
       this.end=0;
    }
 
    encolar(data :any){
       this.items[this.end] = data;
       this.end++;
    }
 
    desencolar(){
       if(this.front === this.end){
          return null;
       }else{
       const data = this.items[this.front];
       this.front++;
       return data;}
    }  
 
    tamaño(){
       return this.end - this.front;
    }
 
 }
 
 let col = new Cola();
 col.encolar(1);
 col.encolar(2);
 col.encolar(3);

 console.log(col)
 console.log(col.tamaño());
 
 col.desencolar();
 console.log(col.tamaño());

 class Rot extends Cola{
   size = super.tamaño();
   constructor(){
      super();
   }
   
   agrego(){
      if(this.end<this.size){
         super.encolar;
      }else{
         this.end=0;
      }
   }

   elimino(){
      const data=this.items[this.front];
      this.front = (this.front+1)%this.size;
      this.size--;
   }
}