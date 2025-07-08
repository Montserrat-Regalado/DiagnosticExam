function palindromo(palabra: string):boolean { //palabra:'hola mundo'
    palabra=palabra.toLowerCase().replace(/ /g, "")
    const palabraInvertida = palabra.split('').reverse().join(''); //['h','o','l','a','m','u','n','d','o']

    return palabra===palabraInvertida
}

console.log(palindromo('Anita lava la tina'))

//toLowerCase()=convierte a minisculas un string, no modifica el original sino regresa uno nuevo. 
//replace(/ /g, "")= Elimina todos los espacios del string usando una expresión regular. / /g significa: encuentra todos los espacios globalmente. No modifica el original sino regresa uno nuevo. 
//Usamos Split() para= Convertir el string en array y poder aplicar el metodo reverse y despues volverlo a unir en string
//reverse()=Invierte el orden de los elementos de un array (directamente sobre el mismo array, no crea uno nuevo)
//Join() despues de reverse()= Une los elementos y los convierte a string
//por que palabra ===palabraInvertida= Porque palabra guarda el valor ingrresado solo sin espacios y en min, palabraInertida almacena la palabra invertida y en base a esa comparacion sabemos que resultado vamos a retonar
//Invertir la frase es el paso mas importante porque es la caracteristica principal de un palindromo, que sea lea igual al reves que normal.También es importante normalizar la entrada antes de comparar (como quitar mayúsculas y espacios), así evitas errores con frases como "Anita lava la tina".
//devuelve true porque es un palindromo

/* ¿Qué significa el parámetro / /g en una expresión regular?
🔍 Busca todos los espacios en blanco (el espacio entre las barras)
🔁 g significa "global", afecta a todas las coincidencias en el string. */
