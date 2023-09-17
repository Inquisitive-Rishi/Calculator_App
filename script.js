let a1 = [];
let a2 = [];

let n1 = '';
let op = '';
let n2 = '';
let res = '';
let strRes = ''; // Used only when length of res > 15.

const display = document.querySelector('.screen');
const dbBtn = document.querySelectorAll('#db');
const eqlBtn = document.querySelector('.eql');
const bksp = document.querySelector('.bksps');
const clrBtn = document.querySelector('.clr');
const optBtn = document.querySelectorAll('.optr');

                                        
// buttons to be displayed on screen.
dbBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let txt = document.createElement('p');
        txt.textContent = btn.textContent;

        // Do not repeat operators
        if ((!res) && op && (txt.textContent == '÷' || txt.textContent == '^' 
        || txt.textContent == '+' || txt.textContent == '-' 
        || txt.textContent == 'x')) {
            return;
        }

        display.appendChild(txt);

        // add values to variable.
        if (!(btn.textContent == Number(btn.textContent) || btn.textContent == '.')) {
            if (op == '') {
                op+=btn.textContent;
            }
        } else {
            if (!(op.length > 0)) {
                addToA1(btn.textContent);
            } else {
                addToA2(btn.textContent);
            }
        }
            console.log(a1);
            console.log(a2);
            console.log(op);
    });
})

function remDspl() {
     while (display.firstChild) {
        display.lastChild.remove();
    }
}


eqlBtn.addEventListener('click',()=> {
    remDspl();
    n1 = a1.join("");
    n2 = a2.join("");
    res = operate(op,n1,n2);
    const dsplRslt = document.createElement('p');

    
    // prevent result to overflow screen.
    if (res.toString().length > 15) {
        strRes = res.toString().slice(0,16);
        dsplRslt.textContent = strRes;
        display.appendChild(dsplRslt);
    } else {
        dsplRslt.textContent = res;
        display.appendChild(dsplRslt);
    }
}); 

optBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
     
        if (res) {
            while (a1.length > 0 || a2.length > 0) {
                a1.pop();
                a2.pop();
            }
            a1.push(res);
            op = btn.textContent;
            res = '';
            n1 = '';    
            n2 = '';
            console.log('n1 '+n1)
            console.log('n2 '+n2)
            console.log('a1 '+a1)
            console.log('a2 '+a2)
            console.log(op);
            console.log('res'+ res)
        }
    })
});


// backspace removes last element from array.
bksp.addEventListener('click', ()=> {
    display.lastChild.remove();
    if (op == '') {
        a1.pop();
        console.log(a1);
        return a1;
    } else {
        a2.pop();
        console.log(a2);
        return a2;
    }
})

// Clear Numbers:
clrBtn.addEventListener('click',()=>window.location.reload())

// Calculate functions:
function add(a,b) {
    return Number(a) + Number(b);
}

function substract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return (!(b === 0)) ? a/b : `not a valid divisor.`;
}

function power(a,b) {
    return Math.pow(a,b);
}

function prct(n1) {
    return n1/100;
}

// 3 placeholder for a single operation. (a number, an operator, another number)
function operate(op,n1,n2) {
    let result = (op == '+') ? add(n1,n2) :
    (op == '^') ? Math.pow(n1,n2) :
    (op == '-') ? substract(n1,n2) :
    (op == 'x') ? multiply(n1,n2) :
    (op == '÷') ? divide(n1,n2) :
    console.log("Not a valid operator!");

    return result;
}

// Add to variables
function addToA1(n) {
    if (!(n == Number(n) || n == '.')) {
        return;
    } else {
        if (a1.includes('.') && n == '.') {
            return;
        } else {
            a1.push(n);
        }
    }
}

function addToA2(n) {
    if (!(n == Number(n) || n == '.')) {
        return;
    } else {
        if (a2.includes('.') && n == '.') {
            return;
        } else {
            a2.push(n);
        }
    }
}