function convertirPesosADolares(pesos:number){
    const dolares=pesos*0.0514
    return dolares.toFixed(2)
}

console.log(convertirPesosADolares(1158))