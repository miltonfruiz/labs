/* 6. Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
• 1-3 - ”Low”
• 4-6 - ”Mid”
• 7-9 - ”High”
function sequentialSizes(val) {
let answer = "";
return answer;
}
sequentialSizes(1);*/

function sequentialSizes(val){
    let answer = '';
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
        default:
            answer = 'Ingrese un valor entre 1 y 9';
            break;
    }
    return answer;
}

console.log(sequentialSizes(10));