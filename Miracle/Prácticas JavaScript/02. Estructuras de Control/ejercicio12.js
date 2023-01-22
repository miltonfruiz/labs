/* 12. Escribe un sentencia switch que pruebe val y establezca answer con las siguientes condiciones
(a) - ”alpha”
(b) - ”beta”
(c) - ”gamma”
(d) - ”delta”
function caseInSwitch(val) {
let answer = "";
return answer;
}
caseInSwitch(1);*/

function caseInSwitch(val) {
    let answer = '';
    switch(val) {
        case 'a':
            answer = 'alpha';
            break;
        case 'b':
            answer = 'beta';
            break;
        case 'c':
            answer = 'gamma';
            break;
        case 'd':
            answer = 'delta';
            break;
        default:
            answer = 'Invalid';
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));