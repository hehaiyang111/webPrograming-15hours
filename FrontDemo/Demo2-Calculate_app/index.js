let buffer = '0';
let total = 0;
let operator;
let screen = document.querySelector('.screen');

function buttonClick(val) {
    if(isNaN(val)){
        handleSymbol(val);
    }else{
        handleNumber(val);
    }
    screen.innerText = buffer;
}

function handleSymbol(val) {
    switch (val) {
        case 'C':
            buffer = '0';
            total = 0;
            break;
        case '=':
            flush(parseFloat(buffer));
            operator = null;
            buffer = total;
            total = 0;
            break;
        case '←':
            if(buffer.length == 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '.':
            buffer = buffer + val;
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(val);
            break;
    }   
}

function handleMath(symbol) {
    // if(buffer == '0') {
    //     return;
    // }
    let floatBuffer = parseFloat(buffer);
    if(total == 0){
        total = floatBuffer;
    }else{
        flush(floatBuffer)
    }
    operator = symbol;
    buffer = '0';
}

function flush(floatBuffer) {
    if(operator == '+'){
        total += floatBuffer;
    }else if(operator == '-'){
        total -= floatBuffer;
    }else if(operator == '×'){
        total *= floatBuffer;
    }else{
        total /= floatBuffer;
    }
}

function handleNumber(numberString) {
    if(buffer == '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}


function init(){
    document.querySelector(".calc-buttons").
    addEventListener("click",(event)=>{
        buttonClick(event.target.innerText)
    })
}

init()



