let a1 = [];
let a2 = [];

let n1 = '';
let op = '';
let n2 = '';
let res = '';

const display = document.querySelector('.screen');
const dbBtn = document.querySelectorAll('#db');
const eqlBtn = document.querySelector('.eql');
const bksp = document.querySelector('.bksps');
const clrBtn = document.querySelector('.clr');
const optBtn = document.querySelectorAll('.optr');



// console.log(dbBtn);
                                        
// buttons to be displayed on screen.
dbBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let txt = document.createElement('p');
        txt.textContent = btn.textContent;
        if ((a1.includes('.') && a2.includes('.')) && txt.textContent == '.') {
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
    dsplRslt.textContent = res;
    display.appendChild(dsplRslt);
    console.log(res)
});

optBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        if (res) {
            n1 = res;
        }
    })
})

// backspace key event


bksp.addEventListener('click', ()=> {
    display.lastChild.remove();
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
        if (('.') in a1 && n == '.') {
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
        if (('.') in a2 && n == '.') {
            return;
        } else {
            a2.push(n);
        }
    }
}

