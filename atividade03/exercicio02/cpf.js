function validarCPF() {
    var cpf = document.getElementById('cpfInput').value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || cpf === cpf[0].repeat(11)) { // Verifica se o CPF tem 11 dígitos e se não é uma sequência repetida
        exibirResultado('CPF inválido');
        return;
    }

    // Calcula o primeiro dígito verificador
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    var resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }
    if (resto !== parseInt(cpf[9])) {
        exibirResultado('CPF inválido');
        return;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }
    if (resto !== parseInt(cpf[10])) {
        exibirResultado('CPF inválido');
        return;
    }

    exibirResultado('CPF válido');
}

function exibirResultado(mensagem) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensagem;
}
