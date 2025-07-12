function convertidorCelsius(grados:number){

    const gradosFahrenheit= (grados*9/5) +32

    return gradosFahrenheit
}

console.log(convertidorCelsius(33))

function convertidorFahrenheit(grados:number){
const gradosCelsius=(grados-32)*5/9
return gradosCelsius
}
console.log(convertidorFahrenheit(85))