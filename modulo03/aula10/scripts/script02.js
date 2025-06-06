var caixa_resultado = document.querySelector("#resultado");

function somar() {
    var n1 = parseFloat(document.querySelector("#txtn1").value);
    var n2 = parseFloat(document.querySelector("#txtn2").value);

    if (isNaN(n1) || isNaN(n2)) {
        caixa_resultado.innerHTML = "Por favor, insira números válidos.";
        return;
    }

    var resultado = n1 + n2;
    // window.alert("O resultado da soma é: " + resultado);
    caixa_resultado.innerHTML = `A soma entre ${n1} e ${n2} é ${resultado}.`;

}
