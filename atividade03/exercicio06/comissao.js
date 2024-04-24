function calcularComissao() {
    var saleAmount = parseFloat(document.getElementById("saleAmount").value);

    var commissionRate = 10; // Taxa de comissão é 10%
    
    var comissao = (saleAmount * commissionRate) / 100;

    document.getElementById("result").innerText = "A comissão é: R$ " + comissao.toFixed(2);
}
