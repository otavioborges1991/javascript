function calcular() {
    var num = window.document.querySelector('input#numero').value
    var tabuada = window.document.querySelector('select#tabuada')
    var resultado


    tabuada.innerHTML = ''
    for (var contador = 1; contador <= 10; contador++) {
        resultado = num * contador
        tabuada.innerHTML += `<option value="${resultado}">${num} * ${contador} = ${resultado}</option>`
    }

}