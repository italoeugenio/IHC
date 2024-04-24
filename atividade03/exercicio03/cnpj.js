function validarCNPJ() {
    var cnpj = document.getElementById('cnpjInput').value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

    if (cnpj.length !== 14 || cnpj === cnpj[0].repeat(14)) { // Verifica se o CNPJ tem 14 dígitos e se não é uma sequência repetida
        exibirResultado('CNPJ inválido');
        return;
    }

    // Calcula o primeiro dígito verificador
    var soma = 0;
    var peso = 5;
    for (var i = 0; i < 12; i++) {
        soma += parseInt(cnpj[i]) * peso;
        peso = (peso === 2) ? 9 : peso - 1;
    }

    var digitoVerificador = 11 - (soma % 11);
    if (digitoVerificador > 9) {
        digitoVerificador = 0;
    }
    if (digitoVerificador !== parseInt(cnpj[12])) {
        exibirResultado('CNPJ inválido');
        return;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    peso = 6;
    for (var i = 0; i < 13; i++) {
        soma += parseInt(cnpj[i]) * peso;
        peso = (peso === 2) ? 9 : peso - 1;
    }

    digitoVerificador = 11 - (soma % 11);
    if (digitoVerificador > 9) {
        digitoVerificador = 0;
    }
    if (digitoVerificador !== parseInt(cnpj[13])) {
        exibirResultado('CNPJ inválido');
        return;
    }

    exibirResultado('CNPJ válido');
}

function exibirResultado(mensagem) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensagem;
}
