document.writeln("Operadores logicos<br>");
let a = 10;
let b = 20;
document.writeln("<ul>");
document.writeln("<li>a = " + a + "</li>");
document.writeln("<li>b = " + b + "</li>");
document.writeln("<li>a && b = " + (a && b) + "</li>"); // Retorna o segundo operando se o primeiro for verdadeiro
document.writeln("<li>a || b = " + (a || b) + "</li>"); // Retorna o primeiro operando se for verdadeiro, caso contrário o segundo
document.writeln("<li>!a = " + (!a) + "</li>"); // Inverte o valor lógico de a
document.writeln("<li>!b = " + (!b) + "</li>"); // Inverte o valor lógico de b
document.writeln("<li>a && b || !a = " + (a && b || !a) + "</li>"); // Combinação de operadores lógicos
document.writeln("<li>a || b && !a = " + (a || b && !a) + "</li>"); // Combinação de operadores lógicos com precedência
document.writeln("<li>a && (b || !a) = " + (a && (b || !a)) + "</li>"); // Uso de parênteses para alterar a precedência
document.writeln("<li>a || (b && !a) = " + (a || (b && !a)) + "</li>"); // Uso de parênteses para alterar a precedência
document.writeln("</ul>");
