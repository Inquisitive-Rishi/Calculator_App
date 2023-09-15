function add(a,b) {
    return a+b;
}

function substract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

// 3 placeholder for a single operation. (a number, an operator, another number)
let n1;
let op;
let n2;

function operate(op,n1,n2) {
    let result = (op == '+') ? add(n1,n2) :
    (op == '-') ? substract(n1,n2) :
    (op == '*') ? multiply(n1,n2) :
    (op == '/') ? divide(n1,n2) :
    console.log("Not a valid operator!");

    return result;
}
