let n1 = '';
let op = '';
let n2 = '';
let res = '';

const display = document.querySelector('.screen');
const dbBtn = document.querySelectorAll('#db');
const eqlBtn = document.querySelector('.eql');
// console.log(dbBtn);
                                        
// buttons to be displayed on screen.
dbBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let txt = document.createElement('p');
        txt.textContent = btn.textContent;
        display.appendChild(txt);


        // add values to variable.
        if (!(btn.textContent == Number(btn.textContent) || btn.textContent == '.')) {
            if (op == '') {
                op+=btn.textContent;
            }
        } else {
            if (!(op.length > 0)) {
                addToN1(btn.textContent);
            } else {
                addToN2(btn.textContent);
            }
        }
        // console.log(n1)
        // console.log(op)
        // console.log(n2)
    });
})

function remDspl() {
     while (display.firstChild) {
        display.lastChild.remove();
    }
}

eqlBtn.addEventListener('click',()=> {
    remDspl();
    res = operate(op,n1,n2);
    const dsplRslt = document.createElement('p');
    dsplRslt.textContent = res;
    display.appendChild(dsplRslt);
    console.log(res)
});

// backspace key event

const bksp = document.querySelector('.bksps');

bksp.addEventListener('click', ()=> {
    display.lastChild.remove();
})

function add(a,b) {
    return Number(a)+ Number(b);
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

// 3 placeholder for a single operation. (a number, an operator, another number)

function operate(op,n1,n2) {
    let result = (op == '+') ? add(n1,n2) :
    (op == '-') ? substract(n1,n2) :
    (op == 'x') ? multiply(n1,n2) :
    (op == '÷') ? divide(n1,n2) :
    console.log("Not a valid operator!");

    return result;
}

// Add to variables

function addToN1(n) {
    if (!(n == Number(n) || n == '.')) {
        return;
    } else {
        n1+=n;
    }
}

function addToN2(n) {
    if (!(n == Number(n) || n == '.')) {
        return;
    } else {
        n2+=n;
    }
}

