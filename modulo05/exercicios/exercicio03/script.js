const calcular = document.querySelector('input#contar')


calcular.addEventListener('click', () => {
    var contador
    var inicio = Number(window.document.querySelector('input#inicio').value)
    var fim = Number(window.document.querySelector('input#fim').value)
    var passo = Number(window.document.querySelector('input#passo').value)
    var resultado = window.document.querySelector('span#resultado')

    // ate aqui os meus testes funcionaram
    if (passo <= 0) {
        resultado.innerHTML = 'ERRO: passo tem que ser maior que zero!'
        return
    }
    resultado.innerHTML = 'Contando:<br>'
    if (inicio < fim) {
        // contagem progressiva
        for (var contador = inicio; contador <= fim; contador += passo) {
            if (contador + passo > fim) {
            resultado.innerHTML += `${contador} 🚩`
            } else {
            resultado.innerHTML += `${contador} 👉 `
            }
        }
        } else if (inicio > fim) {
        // contagem regressiva
        for (var contador = inicio; contador >= fim; contador -= passo) {
            if (contador - passo < fim) {
            resultado.innerHTML += `${contador} 🚩`
            } else {
            resultado.innerHTML += `${contador} 👉 `
            }
        }
    } else {
        // começo e fim iguais
        resultado.innerHTML = 'ERRO: Começo e fim são iguais, não é possivel contar'
    }
})