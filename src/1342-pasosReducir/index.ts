/*function reducirNumero(num: number): number {
    //let pasos = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = num /2
            pasos++
        } else {
            num = num - 1
            pasos++
        }

    }
    return pasos
}
console.log(reducirNumero(999))*/

//¿Cómo podrías adaptar este algoritmo para retornar la lista de operaciones realizadas en lugar del número de pasos?

/*unction mostrarOp(num:number):string[]{
    let pasos: string[]=[];
    while(num>0){
        if(num%2===0){
            pasos.push(`${num} es par -> dividir entre 2`)
            num=num/2;
        }else{
            pasos.push(`${num} es impar -> restar 1`)
            num--
        }
    
    }
    return pasos
}

console.log(mostrarOp(8))*/

//Mini ejercicio:
//Haz una función que reciba un número y devuelva cuántos pasos tomó reducirlo a cero y una lista de pasos en texto.
function reducirYmostrarPasos(num:number):{pasos:number,registro:string[],divisiones:number,restas:number,numOriginal:number}{
    let numOriginal=num
    let pasos:number=0;
    let divisiones=0;
    let restas=0
    let registro:string[]=[];
    while(num>0){
        if(num %2 ===0){
            registro.push(`${num} es paro -> dividir entre 2`)
            num= num/2
            divisiones++
        }else{
            registro.push(`${num} es impar -> restar 1`)
            num=num-1
            restas++
        }
        pasos++
        //console.log(registro.length)
    }
   
    return {pasos,registro,divisiones,restas,numOriginal}

}
const resultado=reducirYmostrarPasos(6)
console.log(resultado)

/*🟢 Básicas
✅ Correcto: la función devuelve un objeto con propiedades (pasos y registro).

✅ Exacto: % se usa para obtener el residuo de una división, en este caso para saber si un número es par o impar.

✅ Bien dicho: pasos cuenta cuántas operaciones se hicieron hasta reducir el número a 0.

🔶 Casi perfecto. Solo afina: lo que se agrega al array no es el número como tal, sino una cadena de texto que incluye el número y una explicación.

✅ Muy buena deducción. Cuando una función retorna un objeto, puedes devolver varios valores con nombres claros, no solo uno, lo que da más claridad al código.

🟡 Intermedias
✅ Totalmente cierto: la operación cambia según si es par o impar, por eso se necesita esa validación.

✅ Excelente: si no incrementas pasos, no contarías las iteraciones, y el resultado siempre sería 0, incluso si se hicieron muchas operaciones.

✅ Correcto: registro es un arreglo de strings.

✅ Muy bien explicado. Solo detallito: la línea no agrega num solo, sino una cadena interpolada que muestra una descripción. El usuario ve tanto el número como el mensaje.

✅ Buenísima observación: en TypeScript se usa la anotación de tipo para dar mayor seguridad en tiempo de compilación. Aunque en este caso let pasos = 0 también funcionaría, el tipo explícito ayuda a entender mejor.

🔴 Difíciles
✅ Perfecto: si pasos-- se ejecuta mal, puede hacer que el ciclo no termine nunca o de resultados incorrectos. Buena intuición.

✅ Muy buena reflexión. Usar un objeto con etiquetas (pasos, registro) da más claridad y mantenibilidad al código.

🔶 Tu razonamiento va por buen camino. Aquí la explicación:

Cuando el número es par, lo divides entre 2 → eso es una operación logarítmica → O(log n)

Cuando es impar, restas 1 → eso es una operación constante, pero puede interferir si hay muchos impares seguidos.

🔍 Conclusión: El peor caso es que tengas que hacer muchas restas, como con un número impar grande.
Por eso, la complejidad es O(log n), pero si se cuentan las restas como relevantes, podríamos decir que el peor caso está entre O(log n) y O(n), pero nunca llega a O(n) porque casi siempre divide.

✅ ¡Excelente idea! Muy bien implementado lo de contar divisiones y restas. Esa solución que diste es justo lo que haría un buen desarrollador que piensa en expandibilidad del código. 🧠✨

🔶 Pequeño detalle: tú mostraste el número original con console.log, lo cual está bien, pero si lo quisieras devolver junto con el objeto, podrías hacer esto:

ts
Copiar
Editar
return { numOriginal, pasos, registro, divisiones, restas }
Y claro, antes del while haces:

ts
Copiar
Editar
const numOriginal = num;
*/