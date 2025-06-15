var fatias = 12
var conta_fatias = window.document.querySelector('span#fatias')
var bloco = window.document.querySelector('p#resultado')

function temFatia() {
    if (fatias > 0) {
        return true
    }
}

conta_fatias.innerHTML = fatias

while (temFatia()){
    fatias--
    bloco.innerHTML += `Comendo uma fatia, ${fatias} restando<br>`
}