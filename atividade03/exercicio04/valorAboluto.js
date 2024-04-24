function calcularValorAbsoluto() {
 
    var inputNumber = document.getElementById("number").value;

    var absoluteValue = Math.abs(parseFloat(inputNumber));

    document.getElementById("result").innerText = "O valor absoluto é: " + absoluteValue;
}
