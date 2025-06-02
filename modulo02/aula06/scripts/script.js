let nome = window.prompt("Digite o seu nome: ");
window.alert("É um grande prazer te conhecer, " + nome + "!");

let numero1 = window.prompt("Digite o primeiro número: "); // este comando retorna uma string
let numero2 = Number.parseInt(window.prompt("Digite o segundo número: ")); // converte a string para um número inteiro
let soma = Number(numero1) + numero2; // converte o primeiro número numero, se necessário
window.alert(`A soma entre ${numero1} e ${numero2} os valores é: ${soma}`);
