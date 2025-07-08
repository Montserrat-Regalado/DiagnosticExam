function primerElemento<T>(elemento:T[]):T|undefined{
    return elemento[0]
}

const valor=primerElemento<number>([2,5,6])
console.log(valor)