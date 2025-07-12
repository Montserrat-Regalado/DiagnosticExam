//Ejercicio 1: Crear un array de números del 1 al 10 y mostrar sus cuadrados
function imprimirNumeros(n:number):number[]{
    const array=[]
    for(let i=1;i<=n;i++){
        array.push(i)
    }
    return array
}


function cuadradosDeArray(numeros:number[]):number[]{
const cuadrados=numeros.map(function (i){
    return  i*i
})
return cuadrados
}

function filtrarPares(numeros:number[]):number[]{
    return numeros.filter(n=>n%2!==0 && n>3)

    //return pares
}
function sumaArray(numeros:number[]):number{
    
    const suma= numeros.reduce((acum,vActual)=>acum+vActual,0)
    return suma
}

const numeros=imprimirNumeros(5)
console.log(`Este es el arreglo original: ${numeros}`)
const resultado1=cuadradosDeArray(numeros)
console.log(`Estos son sus cuadrados: ${resultado1}`)
const llamadaPares=filtrarPares(numeros)
console.log(`Estos son sus impares mayores a 3: ${llamadaPares}`)
const suma=sumaArray(numeros)
console.log(`Esta es la suma de los numeros ${suma}`)


//recibe un array de gastos y devuelve  el total de estos

function totalGastos(gastos:number[]){
    const total=gastos.reduce((acum,gasto)=>acum+gasto,0)
    const gastoGrande=gastos.filter((gasto)=>gasto>120)


    return `Has gastado $${total} y tienes ${gastoGrande.length} gastos que superan los 120 pesos`
}

console.log(totalGastos([120,300,180,50]))











function tipadoExplicitoMapTs(){
const numeros2: number[] = [10, 20, 30];

const resultado2: number[] = numeros2.map((n: number): number => n + 5);

return resultado2
}
//console.log(tipadoExplicitoMapTs())




