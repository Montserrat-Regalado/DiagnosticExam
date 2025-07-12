function interpret(command:string):string{
    let resultado='';

    for(let i=0;i<command.length;i++){
        if(command[i]==='G'){
            resultado+='G'
        }else if(command[i]==='(' && command[i+1]===')'){
            resultado+='o'
            i++
        }else if(command[i]==='(' && command[i+1]==='a' ){//else if(command[i]==='(' && command[i+1]==='a' && command[i+2]==='l' && command[i+3]===')'){
            resultado+='al'
            i+=3
        }
    }
    return resultado        
}

console.log(interpret("G()(al)G")) // "Goal" 
//console.log(interpret("G()()()()(al)")) // "Gooooal"
//console.log(interpret("G(al)G(al)()()G")) // "GalGalooG" 

/*Opcion con patrones
function interpret(command: string): string {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
}
*/

/*Flashcards
1. ¿Qué hace el método += en resultado += "G"?
🔹 Suma o concatena el valor al contenido actual de la variable resultado.

2. ¿Por qué se usa i++ después de encontrar "()"?
🔹 Para saltar el carácter ), ya que "()" ocupa dos caracteres, y el siguiente ya fue procesado.

3. ¿Qué pasa si no haces i += 3 al encontrar "(al)"?
🔹 El ciclo volvería a evaluar los caracteres 'a', 'l', y ')', provocando errores o resultados incorrectos.

4. ¿Qué tipo de estructura se usa para recorrer el string?
🔹 Un for loop con índice manual (for(let i=0; i<command.length; i++)).

5. ¿Qué evalúa la condición command[i] === '(' && command[i+1] === ')'?
🔹 Si los caracteres actuales forman el patrón "()" para convertirlo en "o".

6. ¿Cómo se decide qué agregar al resultado?
🔹 Según el patrón actual ("G", "()" o "(al)") se concatena "G", "o" o "al" respectivamente.

7. ¿Por qué no usamos command.includes("G")?
🔹 Porque necesitamos procesar carácter por carácter y tomar decisiones según la posición, no solo saber si existe.

8. ¿Qué tipo de dato devuelve esta función?
🔹 Devuelve un string.

9. ¿Qué pasa si el string es vacío ""?
🔹 El ciclo no se ejecuta y retorna un string vacío ("").

10. ¿Por qué esta solución es eficiente?
🔹 Porque recorre el string una sola vez: O(n) complejidad lineal.

🧠 FLASHCARDS - UNIR CARACTERES
1. ¿Qué hace el método .join() en un array?
🔹 Une todos los elementos del array en un solo string, usando el separador que le indiques.

2. ¿Qué pasa si uso .join('') con un array de caracteres?
🔹 Junta los caracteres sin ningún espacio ni coma entre ellos. Ejemplo: ['H','o','l','a'] → "Hola".

3. ¿Cuál es la diferencia entre .join() y .push()?
🔹 join() crea un string a partir del array.
🔹 push() agrega un nuevo valor al final del array.

4. ¿Qué método es más adecuado para unir caracteres: .join() o .filter()? ¿Por qué?
🔹 .join() es el adecuado, porque no queremos eliminar o seleccionar elementos, sino unirlos.

5. ¿Para qué sirve el parámetro dentro de .join()?
🔹 Especifica qué se pondrá entre cada elemento (por ejemplo: '', ',', ' ').

6. ¿Se puede hacer lo mismo que .join() con un bucle for?
🔹 Sí, pero es más largo. Habría que declarar una variable string y concatenar elemento por elemento.

7. ¿Qué retorna .join()?
🔹 Un nuevo string, no modifica el array original.

8. ¿Cuál es la complejidad de .join()?
🔹 O(n), ya que recorre todos los elementos del array para unirlos.*/