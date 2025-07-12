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

export function numMayor(num: number[]) { //tiene export porque hice debug
    let mayor = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] > mayor) {
            mayor = num[i]
        }
    }
    return `El numero mas grande es: ${mayor}`
}
console.log(numMayor([40, 10, 15, 1,58]))



