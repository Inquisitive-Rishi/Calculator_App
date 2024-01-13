
const footerTxt = document.querySelector('.footer div')
const divisionError = document.querySelector('.division-error')
const screen = document.querySelector('.screen')


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
    if (b !== 0) {
        return a/b;
    } else {
        divisionError.textContent = 'Division by 0 is infinity';
    }   
}

let currYear = new Date().getFullYear()
footerTxt.textContent = `Copyright © Rishi Raj ${currYear}`