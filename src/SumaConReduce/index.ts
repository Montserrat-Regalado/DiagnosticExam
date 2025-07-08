function sumaConReduce(numeros:number[]){
    const total=numeros.reduce((acum,num)=>acum+num,0)
    return total 
}
console.log(sumaConReduce([5,5,5,45]))