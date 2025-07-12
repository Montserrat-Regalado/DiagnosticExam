function sumaPares(numeros:number[]){
    let sumaTotal=0
    for(let i =0;i<numeros.length;i++){
        if(numeros[i]%2===0){
            sumaTotal=sumaTotal+numeros[i]
        }
    }
    return `La suma de los numeros es: ${sumaTotal}`
}
console.log(sumaPares([10,10,10]))
