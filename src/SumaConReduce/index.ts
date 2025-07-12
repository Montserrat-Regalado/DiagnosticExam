function sumaConReduce(numeros:number[]):number{
    const total=numeros.reduce((acum,num)=>acum+num,0)
    return total 
} 
console.log(sumaConReduce([20,58,68])) 