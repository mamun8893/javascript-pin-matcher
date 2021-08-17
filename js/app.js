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