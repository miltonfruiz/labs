/* Se necesita desarrollar una clase que represente a un Tamagochi, para esto se debe tomar en
cuenta las siguientes caracteristicas:

• nombre
• energía (1 a 100)
• sexo (F/M)
• sentido del humor (1 a 5)
• edad

Las acciones que puede realizar son:

• comer (aumenta la energia un 25%)
• dormir
• beber
• saltar (gasta un 25% de energia)
• correr
• caminar(gasta un 10% de la energia)

Si gasta toda la energia se muere, al igual que si come o bebe 5 veces seguidas.
Genere una clase que tenga una colección de Tamagochis con métodos para agregar, eliminar y
buscar un Tamagochi */

class Tamagochi {
    constructor(
      nombre: string,
      energia: number,
      sexo: string,
      sentidoDelHumor: number,
      edad: number
    ) {
      this.nombre = nombre;
      this.energia = energia;
      this.sexo = sexo;
      this.sentidoDelHumor = sentidoDelHumor;
      this.edad = edad;
    }
    nombre: string;
    energia: number;
    sexo: string;
    sentidoDelHumor: number;
    edad: number;

    comer() {
      if (this.salud()) {
        this.energia = Math.ceil(this.energia * 1.25);
        console.log('Estoy comiendo...');
        if (this.energia > 100) {
          this.energia = 100;
        }
        console.log(`Mi energía es ${this.energia}`);
      }
    }
    dormir() {
      if (this.salud()) {
        console.log('Estoy durmiendo...');
      }
    }
    beber() {
      if (this.salud()) {
        console.log('Estoy bebiendo...');
      }
    }
    saltar() {
      if (this.salud()) {
        this.energia = Math.floor(this.energia * 0.75);
        console.log('Estoy saltando...');
        if (this.energia < 0) {
          this.energia = 0;
        }
        console.log(`Mi energía es ${this.energia}`);
      }
    }
    correr() {
      if (this.salud()) {
        console.log('Estoy corriendo...');
      }
    }
    caminar() {
      if (this.salud()) {
        this.energia = Math.floor(this.energia * 0.9);
        console.log('Estoy caminando...');
        if (this.energia < 0) {
          this.energia = 0;
        }
        console.log(`Mi energía es ${this.energia}`);
      }
    }
    salud() {
      if (this.energia >= 1) {
        return true;
      } else {
        console.log('Estoy muerto.');
        return false;
      }
    }
  }
  const tamagochi = new Tamagochi('Tamagochi', 100, 'Hombre', 3, 33);

  tamagochi.comer();
  tamagochi.saltar();
  tamagochi.caminar();