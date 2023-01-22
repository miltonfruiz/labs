/* 8. Cambie el orden logico en la función de manera que retorne de forma correcta en todos
los casos
function orderMyLogic(val) {
if (val < 10) {
return "Less than 10";
} else if (val < 5) {
return "Less than 5";
} else {
return "Greater than or equal to 10";
}
}
orderMyLogic(7);*/

function orderMyLogic(val) {
    if (val < 5) {
        return 'Less than 5';
    } else if (val < 10) {
        return 'Less than 10';
    } else {
    return 'Greater than or equal to 10';
    }
}

console.log(orderMyLogic(7));