function arredondar() {
    const valor = parseFloat(document.getElementById('valor').value);
    const casasDecimais = 2; // Altere este valor para o número desejado de casas decimais

    const resultadoArredondado = valor.toFixed(casasDecimais);
    document.getElementById('resultado').innerHTML = `Valor arredondado: ${resultadoArredondado}`;
}
