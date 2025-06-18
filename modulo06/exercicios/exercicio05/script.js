var numero = window.document.querySelector('input#numero')
var lista = window.document.querySelector('select#lista')
var resultado = window.document.querySelector('div#resultado')
var valores_na_lista = []

function somar(lista) {
    let soma = 0
    for (numero of lista) {
        soma += numero
    }
    return soma
}


function adicionar(){
    let valor = Number(numero.value)
    if (!numero.value || isNaN(valor) || valor > 100 || valor <= 0) {
        // valor invalido
        window.alert('Valor invalido, digite apenas valores entre 1 e 100.')
    } else if (valores_na_lista.indexOf(valor) != -1) {
            window.alert('O valor ja esta na lista')
    } else {
        valores_na_lista.push(valor)
        lista.innerHTML += `<option value="${valor}">O valor ${valor} foi adicionado</option>`
    }

}
function analisar(){
    let tamanho = valores_na_lista.length
    // let soma = valores_na_lista.reduce((acc, val) => acc + val, 0) // soma usando reduce
    let soma = somar(valores_na_lista) // soma usando minha função 
    let maximo = Math.max(...valores_na_lista)
    let minimo = Math.min(...valores_na_lista)
    let media = soma / tamanho

    resultado.innerHTML = `<p>Ao todo foram ${tamanho} numeros adicionados.</p>`
    resultado.innerHTML += `<p>O maior numero foi ${maximo}</p>`
    resultado.innerHTML += `<p>O menor foi ${minimo}</p>`
    resultado.innerHTML += `<p>A soma entre os numeros é ${soma}</p>`
    resultado.innerHTML += `<p>E a média entre eles é ${media}</p>`

}