// Ejercicios

// 2. Implemente su propia función find

interface Array<T> {
    propiaFind(callback: (ingreso: any, i?: number, array?: any[]) => any): any
};

Array.prototype.propiaFind = function(callback){                          
    for(let i = 0; i < this.length; i++)       
    {
        if (callback(this[i], i, this)) {return this[i]}
    }
    return 'No cumple';
};