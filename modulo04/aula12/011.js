var idade = 33
var agora = new Date()
var hora = agora.getHours()
if (idade < 18 && idade >= 16 || idade >= 65) {
    console.log(`Com ${idade} você não é obrigado a votar, mas pode se quiser.`)
} else if (idade < 16) {
    console.log(`Com ${idade} você não é obrigado a votar, e não pode mesmo que queira.`)
} else {
    console.log(`Com ${idade} seu voto é obrigatorio.`)
}

console.log(`Hora atual ${hora}`)
if (hora >= 18) {
    console.log("Boa noite!")
} else if (hora >= 12) {
    console.log("Boa Tarde!")
} else if (hora >= 6) {
    console.log("Bom dia!")
} else {
    console.log("Bela madrugada!")
}
