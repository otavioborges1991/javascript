var velocidade = -50;
console.log(`A velocidade do carro é ${velocidade} km/h`);

if (velocidade > 60) { // apenas com if, é uma condição simples
    console.log('Você ultrapassou a velocidade permitida. MULTADO!');
} else if (velocidade <= 60 && velocidade >= 0) { // com else if, é uma condição composta
    console.log('Você está dentro da velocidade permitida. Dirija com segurança!');
} else { // com else, é uma condição composta
    console.log('Velocidade inválida. Por favor, verifique a entrada.');
}