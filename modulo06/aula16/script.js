function par(num, bool=true){ 
    // diz se um numero é par ou impar
    // retorna true se o numero é par senão false
    // a não ser que o parametro bool seja false
    // então retorna par ou impar respectivamente
    switch (bool) {
        case true:
            return Number(num) % 2 == 0
        case false:
            if (num % 2 == 0) {
                return 'par'
                } else {
                    return 'impar'
                }
            }
}
function soma(a, b){
    return Number(a) + Number(b)
}
function dobro(n) {
    return n*2
}
function fatorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * fatorial(n -1)
}
var numero1 = 2
var numero2 = 3
console.log(par(numero1))
console.log(soma(numero1, numero2))
console.log(dobro(numero1))
console.log(fatorial(5))