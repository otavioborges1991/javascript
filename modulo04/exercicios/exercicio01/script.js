function carregar() {
    // definindo variaveis

    var agora = new Date
    var hora = agora.getHours() // hora
    var relogio = window.document.querySelector("span#hora") // aonde se mostra a hora
    var imagem = window.document.querySelector("img#imagem") // aonde se mostra a imagen
    // definindo a hora do relogio
    relogio.innerHTML = hora
    // definindo a imagem
    if (hora >=7 && hora < 17) {
        imagem.src = "imagens/dia.png"
        document.body.style.backgroundColor = '#5060a0'
    } else if (hora >= 18 || hora < 5) {
        imagem.src = "imagens/noite.png"
        document.body.style.backgroundColor = '#202020'
    } else if (hora >= 17 && hora) {
        imagem.src = "imagens/anoitecer.png"
        document.body.style.backgroundColor = '#402020'
    } else {
        imagem.src = "imagens/amanhecer.png"
        document.body.style.backgroundColor = '#a06020'
    }
}

