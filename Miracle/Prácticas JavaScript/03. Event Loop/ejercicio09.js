/*  9. Deduce la salida

const f1 = () => {
    console.log('f1');
    f2();
}

const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result)); */

/* 1.'f4'
   2. 'Sonic'
   3. 'Albert'
   4. 'f1'
   5. 'f2'
   6. 'f3' */