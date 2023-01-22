/*6. Deduce la salida

const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
    console.log('Cartoon');
    setTimeout(tom, 5000);
    
    new Promise((resolve, reject) => 
    resolve('should it be right after Tom, before Jerry?')
    ).then(resolve => console.log(resolve))

    jerry();
}

cartoon();*/

/* 1. 'Cartoon' 
   2. 'Jerry'
   3. 'should it be right after Tom, before Jerry?'
   4. 'Tom' */