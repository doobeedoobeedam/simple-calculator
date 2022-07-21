function clearScreen() {
    document.getElementById('result').value = '';
}

function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var data = document.getElementById('result').value;
    document.getElementById('result').value = eval(data)
}