function verificar(){
    // declarando variaveis
    // relacionadas a idade
    let data = new Date()
    let ano = data.getFullYear()
    let ano_nascimento = document.querySelector("input#ano-nascimento").value
    let idade = ano - ano_nascimento
    // Sexo
    let sexo = window.document.getElementsByName('sexo')
    let genero = ''
    // outros
    let imagem = window.document.querySelector("img#imagem") // aonde vai a imagen
    let faixa = window.document.querySelector("aside#faixa") // aonde vai a legenda
    
    // validando dados
    // verificando se o ano de nascimento é valido
    if (ano_nascimento.lenght == 0 || ano_nascimento > ano) {
        window.alert('Ano de nascimento invalido!')
    } else {
        if (sexo[0].checked) {
            genero = 'masculino'
        } else {
            genero = 'feminino'
        }
    }
    
    
    if (genero == "masculino"){
        if (idade >= 60) {
            // idoso
            faixa.innerHTML = "Idoso"
            imagem.src = "imagens/idoso, homen.png"
        } else if (idade >= 18) {
            // adulto
            faixa.innerHTML = "Adulto"
            imagem.src = "imagens/adulto, homen.png"
        } else if (idade >= 12) {
            // adolescente
            faixa.innerHTML = "Adolescente"
            imagem.src = "imagens/adolescente, homen.png"
        } else if (idade > 2) {
            // criança
            faixa.innerHTML = "Menino"
            imagem.src = "imagens/criança, menino.png"
        } else {
            faixa.innerHTML = "Bebesinho"
            imagem.src = "imagens/bebê, menino.png"
        }
    } else if (genero == 'feminino') {
        if (idade >= 60) {
            // idoso
            faixa.innerHTML = "Idosa"
            imagem.src = "imagens/idoso, mulher.png"
        } else if (idade >= 18) {
            // adulto
            faixa.innerHTML = "Adulta"
            imagem.src = "imagens/adulto, mulher.png"
        } else if (idade >= 12) {
            // adolescente
            faixa.innerHTML = "Adolescente"
            imagem.src = "imagens/adolescente, menina.png"
        } else if (idade > 2) {
            // criança
            faixa.innerHTML = "Menina"
            imagem.src = "imagens/criança, menina.png"
        } else {
            faixa.innerHTML = "Bebesinha"
            imagem.src = "imagens/bebê, menina.png"
        }
    } else {
        imagen.src = "imagens/invalido.png"
    }
    faixa.style.textAlign = 'center'
}