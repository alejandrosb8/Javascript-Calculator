let actualDisplay = '';
let oldOperation = '';
let operationType = '';

opDisplay = document.querySelector('#opDisplay');
opHistory = document.querySelector('#opHistory')

buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        let keyPressed = e.target.getAttribute('id');

        switch(keyPressed){
            case 'btnAC':
                actualDisplay = '';
                oldOperation = '';
                opHistory.textContent = '';
                break;
            case 'btnC':
                actualDisplay = opDisplay.textContent.slice(0, opDisplay.textContent.length - 1);
                break;
            case 'btn0':
                actualDisplay += '0';
                break;
            case 'btn1':
                actualDisplay += '1';
                break;
            case 'btn2':
                actualDisplay += '2';
                break;
            case 'btn3':
                actualDisplay += '3';
                break;
            case 'btn4':
                actualDisplay += '4';
                break;
            case 'btn5':
                actualDisplay += '5';
                break;
            case 'btn6':
                actualDisplay += '6';
                break;
            case 'btn7':
                actualDisplay += '7';
                break;
            case 'btn8':
                actualDisplay += '8';
                break;
            case 'btn9':
                actualDisplay += '9';
                break;
            case 'btnComma':
                if (/\./.test(actualDisplay) === false && actualDisplay != ''){
                    actualDisplay += '.';
                }
                break;
            case 'btnPlusMinus':
                actualDisplay = (actualDisplay[0] !== '-' && actualDisplay != '') ? '-' + actualDisplay : actualDisplay.slice(1);
                break;
        }

        if (actualDisplay != ''){
            switch(keyPressed){
                case 'btnPlus':
                    pressOperationBtn('+');
                    break;
                case 'btnMinus':
                    pressOperationBtn('-');
                    break;
                case 'btnMul':
                    pressOperationBtn('x');
                    break;
                case 'btnDiv':
                    pressOperationBtn('/');
                    break;
                case 'btnEqual':
                    if (operationType != '' && oldOperation != ''){
                        opHistory.textContent = oldOperation + operationType + actualDisplay;
                        actualDisplay = makeOperation(oldOperation, actualDisplay, operationType);
                        oldOperation = '';
                    }
                    break;
            }
        }

        opDisplay.textContent = actualDisplay;
    })
});

function pressOperationBtn(type){
    if (oldOperation != ''){
        opHistory.textContent = oldOperation + operationType + actualDisplay;
        actualDisplay = makeOperation(oldOperation, actualDisplay, operationType);
    }
    operationType = type;
    oldOperation = actualDisplay;
    actualDisplay = '';
    opHistory.textContent = oldOperation + type
}

function makeOperation(one, two, op){
    one = parseFloat(one)
    two = parseFloat(two)
    switch (op){
        case '+':
            return one + two;
        case '-':
            return one - two;
        case 'x':
            return one * two;
        case '/':
            return one / two;
    }
}