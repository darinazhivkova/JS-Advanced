function subtract() {
    let firstNumer = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let result = Number(firstNumer) - Number(secondNumber);

    let div = document.getElementById('result');
    div.innerHTML = result;
}