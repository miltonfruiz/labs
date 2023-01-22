// Ejercicios

// 1. Implemente su propia función map

interface Array<T> {
    propiamap(callback: (ingreso: any, i?: number, array?: any[]) => any): any[]
};

Array.prototype.propiamap = function(callback) {
    let arreglo = [];
    for(let i = 0; i < this.length; i++) {
        arreglo.push(callback(this[i]));
    }
    return arreglo;
};