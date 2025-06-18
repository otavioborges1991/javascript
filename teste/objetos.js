class objeto {
    cor
    material
    peso
    engordar(peso){
        this.peso += peso
    }
    quebrar(){
        this.material = 'pó'
    }
}

var vaso = new objeto()
console.log(vaso)
vaso.cor = 'branco'
console.log(vaso)
vaso.material = 'porcelana'
vaso.peso = 2.300
console.log(vaso)
vaso.engordar(1.5)
console.log(vaso)
vaso.quebrar()
console.log(vaso)

