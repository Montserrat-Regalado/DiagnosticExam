
export function factorial(numero: number) {
    let acum = numero
    for (let i = numero-1; i > 0; i--) {
        acum=acum*i
    }
    return acum

   /* let i = numero // i es iguak  a 5
    while (i>0){
        acum=acum*--i
    }
    return acum*/
}

console.log(factorial(170))