function calculadora(numero1:number,numero2:number,opcion:number){

    switch (opcion){
        case 1:
            const suma=numero1+numero2
            return suma
        case 2:
            const resta=numero1-numero2
            return resta
        case 3:
            const multiplicar=numero1*numero2
            return multiplicar
        case 4:
            const dividir= numero1/numero2
            return dividir
    }
   // return
}
console.log(calculadora(5,3,3))

//calculadsora CHATGPT (mejoras de la mia)

function calculadoraBasica(numero1: number, numero2: number, opcion: number): number | undefined {
  switch (opcion) {
    case 1:
      return numero1 + numero2;
    case 2:
      return numero1 - numero2;
    case 3:
      return numero1 * numero2;
    case 4:
      if (numero2 === 0) {
        console.error("Error: No se puede dividir entre 0");
        return undefined;
      }
      return numero1 / numero2;
    default:
      console.error("Opción no válida");
      return undefined;
  }
}

console.log(calculadoraBasica(0,6,36))