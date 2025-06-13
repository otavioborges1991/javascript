function calcular() {
                    var txtv = window.document.querySelector('input#txtvel')
                    var res = window.document.querySelector('div#res')
                    var vel = Number(txtv.value)
                    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong></p>`
                    if (vel > 60) {
                        res.innerHTML += `<p>Você esta <strong>MULTADO!</strong></p>`
                    }
                    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}

function nacionalidade() {
    var nacionalidade = window.document.querySelector('input#origem').value
    var descritor = window.document.querySelector('span#nacionalidade')

    if (nacionalidade.toLowerCase() == 'brasil') {
        descritor.innerHTML = 'Nativo'
    } else {
        descritor.innerHTML = 'Estrangeiro'
    }

}