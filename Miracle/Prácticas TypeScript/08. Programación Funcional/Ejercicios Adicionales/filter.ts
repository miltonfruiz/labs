// Ejercicios

// 3. Implemente su propia función filter

interface Array<T> {
    propiafilter(callback: (ingreso: any, i?: number, array?: any[]) => boolean): any[] | string
};

Array.prototype.propiafilter = function(callback): any[] | string {
    let arreglo = [];                         
    for(let i = 0; i < this.length; i++)
    {
        if(callback(this[i]) === true)
        {
            arreglo.push(this[i]);
        }
        return arreglo;
    }
};