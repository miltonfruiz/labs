/* 8. Deduce la salida

const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result)); */

 /* 1. 'f4'
    2. 'Boom' 
    3. 'Sonic'
    4. 'Albert'
    5. 'f1'
    6. 'f3' 
    7. 'f2' */