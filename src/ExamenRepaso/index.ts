/*function numerosIP(num: number): string {
    let residuo = num % 2
    if (residuo === 0) {
        return `El numero ${num} es par`
    } else {
        return `El num ${num} es impar`
    }
}
console.log(numerosIP(17))

function invertirCadena(cadena: string):string {
    let cadenaArrray = cadena.split('')
    cadenaArrray.reverse()
    return cadenaArrray.join('')
}

console.log(invertirCadena('Hola'))*/

import { markAsUntransferable } from "worker_threads"

function fizzBuzz(n: number) {
    let arrayNumber = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arrayNumber.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arrayNumber.push('Fizz')
        } else if (i % 5 === 0) {
            arrayNumber.push('Buzz')
        } else {
            arrayNumber.push(i)
        }
    }
    return arrayNumber
}
console.log(fizzBuzz(100))

function contarVocales(cadena: string) {
    let cadenaArray = cadena.toLowerCase().split('')
    let contadorVocales = 0;
    cadenaArray.forEach((vocal) => {
        if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
            contadorVocales++
        }
    })
    return `"${cadena}" tiene: ${contadorVocales} vocales`
}
console.log(contarVocales('Haziel Garcia Aguila'))

export function numMayor(num: number[]) {
    let mayor = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] > mayor) {
            mayor = num[i]
        }
    }
    return `El numero mas grande es: ${mayor}`
}
console.log(numMayor([40, 10, 15, 1,58]))

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

