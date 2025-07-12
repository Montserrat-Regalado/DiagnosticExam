function calculoIMC(peso:number,altura:number){
    const calculo=(peso/Math.pow(altura,2))*10000

    let clasificacion:string=""
    if(calculo<18.5){
        clasificacion='Bajo peso'
    }else if(calculo<25){
        clasificacion='Peso normal'
    }else if(calculo<30){
        clasificacion='Sobrepeso'
    }else if(calculo<35){
        clasificacion='Obesidad grado 1'
    }else if(calculo<40){
        clasificacion='Obesidad grado 2'
    }else{
        clasificacion='Obesidad grado 3'
    }
    
    return `Tu IMC es ${calculo.toFixed(2)} y se clasifica como ${clasificacion}`
}

console.log(calculoIMC(59,155))