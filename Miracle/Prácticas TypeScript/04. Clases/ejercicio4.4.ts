/* Ejercicio 4.4

Dado el siguiente codigo:

1 Añadir tipos
2 Hacer que la clase Snake herede de Animal
3 Hacer que la clase Pony herede Animal
4 Hacer que el miembro del nombre no pueda ser accedido públicamente */

abstract class Animal {
    constructor(private name: string) { }
    move(meters: number): void {
        console.log(`${this.name} se movio ${meters}m.`);
    }
}

class Snake extends Animal {
    move(): void {
        super.move(2);
        console.log('Deslizandose...');
    }
}

class Pony extends Animal {
    move(): void {
        super.move(4);
        console.log('Galopando...');
    }
}

const sammy = new Snake("Sammy la serpiente");
sammy.move();

const pokey = new Pony("Pokey el pony");
pokey.move();

/* Archivo JS

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = @class (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        console.log("".concat(this.name, " se movio ").concat(meters, "m."));
    };
    return Animal;
}());
var Snake = @class (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.move = function () {
        _super.prototype.move.call(this, 5);
        console.log('Deslizandose...');
    };
    return Snake;
}(Animal));
var Pony = @class (function (_super) {
    __extends(Pony, _super);
    function Pony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pony.prototype.move = function () {
        _super.prototype.move.call(this, 60);
        console.log('Galopando...');
    };
    return Pony;
}(Animal));
var sammy = new Snake("Sammy la serpiente");
sammy.move();
var pokey = new Pony("Pokey el pony");
pokey.move(); */