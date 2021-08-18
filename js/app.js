function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    return pin;
}

document.getElementById('pin-generate').addEventListener('click', function() {
    const pin = generatePin();
    document.getElementById('pin-input').value = pin
})

//Number type

document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    } else {
        const prevoisNumber = calcInput.value;
        const newNUmber = prevoisNumber + number;
        calcInput.value = newNUmber;
    }

})