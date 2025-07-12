//imprimir numeros del 1 al 10
function imprimeDiezNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
    //return
}

//imprimeDiezNumeros();//Llamamos sin console.log porque la funcion en si ya imprime.


//sumar todos los numero de un array
function sumarNumeros(numero:number):number{
    let suma=0
    for(let i=1;i<=numero;i++){
        suma+=i
    }
    return suma
}

let num=15
const total=sumarNumeros(15)
//console.log(`La suma total del 1 al ${num} es ${total}`)



//MiniReto:  Crea una función que reciba un array de gastos (números), y devuelva: El total gastado y Cuántos gastos fueron mayores a $500 

function analizarGastos(gastos: number[]): string {
  let total = 0;
  let mayores500 = 0;

  for (let gasto of gastos) {
    total += gasto;
    if (gasto > 500) mayores500++;
  }

  return `Total: $${total} | Gastos > $500: ${mayores500}`;
}

console.log(analizarGastos([100, 900, 450, 700]))