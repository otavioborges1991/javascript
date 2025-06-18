var automoveis = ['Chevrolet', 'Gol', 'Volkswagen']
var vez = 1
function mostrarCarros(nome, variavel) {
    /*
        Mostra um array cada cada elemento em uma linha enumerados.
        E quantas quantas vezes foi mostrado. 
    */
    console.log(`Mostrando ${nome} pela ${vez}° vez.`)
    let contador = 1
    for (var indice in variavel) {
        console.log(`${contador} - ${variavel[indice]}.`)
        contador += 1
    }
    vez += 1
}
mostrarCarros('carros', automoveis)
automoveis[2] = 'Yamaha'
mostrarCarros('carros', automoveis)
automoveis.push('Honda civic')
mostrarCarros('carros', automoveis)
console.log(`O comprimento da lista de automoveis é ${automoveis.length}.`)
console.log('Organizando a lista em ordem alfabetica.')
automoveis.sort()
mostrarCarros('carros', automoveis)
console.log(`Mostrando o indice do carro "Gol" é ${automoveis.indexOf('Gol')}`)
console.log('A o indice retornado fosse -1 significaria que o objeto procurado, no casso a string "Gol", não existe dentro do array.')
