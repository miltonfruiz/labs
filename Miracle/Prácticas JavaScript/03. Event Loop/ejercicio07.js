/*7. Deduce la salida

const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const doggy = () => console.log('Doggy');

const cartoon = () => {
    console.log('Cartoon');
    
    setTimeout(tom, 50);
    setTimeout(doggy, 30);
    
    new Promise((resolve, reject) => 
    resolve('I am a Promise, right after tom and doggy! Really?')
    ).then(resolve => console.log(resolve));
    
    new Promise((resolve, reject) => 
    resolve('I am a Promise after Promise!')
    ).then(resolve => console.log(resolve));
    
    jerry();
}

cartoon();*/

/* 1. 'Cartoon'
   2. 'Jerry'
   3. 'I am a Promise, right after tom and doggy! Really?'
   4. 'I am a Promise after Promise!'
   5. 'Doggy'
   6. 'Tom' */