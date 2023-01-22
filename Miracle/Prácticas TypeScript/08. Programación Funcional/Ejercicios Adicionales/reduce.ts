// Ejercicios

// 4. Implemente su propia función reduce

interface Array<T> {
    propiaReduce(callback: (ingreso: any, i?: number, array?: any[]) => any): any
};

Array.prototype.propiaReduce = function(callback){
    let inicial = 0;                             
    for(let i = 0; i < this.length; i++)       
    {
        callback(inicial = inicial + this[i])
    }
    return inicial;
};