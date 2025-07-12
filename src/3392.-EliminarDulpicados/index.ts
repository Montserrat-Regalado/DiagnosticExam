//*Declara funcion que recibe un parametro array de tipo numerico y devuelve un valor numerico entero.
function removeDuplicates(nums: number[]): number {
    //* declara k  de tipo numerico que funciona como indice inicializado en 0
    let k: number = 0;
    //* inicia el ciclo recorriendo el arreglo nums y lo asigna a x
    for (const x of nums) {
        console.log(nums)
        //* Valida que el indice sea igual a 0 con el fin de sersiorar que no hay ningun elemento antes y que estamos en el inicio del arreglo, una vez que ya no se cumple vlaida que el valor en x sea diferente del valor de la posicion que tiene k
        if (k === 0 || x !== nums[k - 1]) {
            //* asigna el valor de x en k e incrementa k para seguir con el siguiente valor del arreglo 
            nums[k++] = x;
            
        }
    }
    //* Regresa el valor de k  que es la cantidad de valores guardados y sale del ciclo. 
    return k;
    
}

//*console.log(removeDuplicates([1,2,3,3]))








function eliminarDuplicados(numeros:number[]):number{
    let k:number=0;
     for (const x of numeros){
        if(k===0||x!==numeros[k-1]){
            numeros[k++]=x
        }
     }
     return k

}

//*console.log(eliminarDuplicados([1,2,6]))









function eliminarDuplicados2(numbers:number[]):number{
    let indice:number=0;

    for(const valor of numbers){
        if(indice===0||valor!==numbers[indice-1]){
            numbers[indice++]=valor
        }
    }
    return indice
}

//*console.log(eliminarDuplicados([1,2,3,3]))






function eliminarDuplicados3(arrayNumeros:number[]):number{
    let indicek:number=0;

    for(const valorX of arrayNumeros){
        if(indicek===0||valorX!==arrayNumeros[indicek-1]){
            arrayNumeros[indicek++]=valorX
        }
    }
    return indicek
}

//*console.log(eliminarDuplicados3([1,2,3,4,5,5]))




function eliminarDuplicados4(matrizNumeros:number[]){
    let k:number=0;
    for (const x of matrizNumeros){
        if(k===0||x!==matrizNumeros[k-1]){
            matrizNumeros[k++]=x
        }
    }
    return k;
}

//*console.log(eliminarDuplicados4([1,2,2]))




function eliminarDuplicados6(numerosArray:number[]):number{
    let k:number=0;
    for(const valorX of numerosArray){
        if(valorX===0||valorX!==numerosArray[k-1]){
            numerosArray[k++]=valorX
        }
    }
    return k;

}

console.log(eliminarDuplicados6([1,2,3,3]))


/* Preguntas sobre el problema
¿Cuál es el propósito principal de la función removeDuplicates?
//*Eliminar cualquier numero duplicado que se encuentre dentro de un array ordenado.
¿Por qué se requiere que el array esté ordenado para que este algoritmo funcione correctamente?
//*Porque solo compara con el numero anterior
¿Qué representa la variable k dentro de la función?
//* El indice y el valor que guarda la cantidad de numeros sin repetir
¿Qué significa la condición x !== nums[k - 1]? ¿Por qué es importante? */
//*Es importante porque valida que el numero iterado (x) sea diferente al numero correspondiente al indice k-1



