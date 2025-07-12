function primerElemento<T>(elemento:T[]):T|undefined{
    return elemento[0]
}

const valor=primerElemento<string>(['montse','hola'])
console.log(valor)