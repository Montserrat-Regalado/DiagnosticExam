/*function numVecesLetraFrase(frase: string): { [letra: string]: number } {
    frase = frase.toLowerCase().replace(/ /g, "");
    let contadorLetras: { [letra: string]: number } = {} //declaramos diccionario. 
    const aFrase = frase.split('');

    aFrase.forEach((letra) => {
        if (contadorLetras[letra]) {
            contadorLetras[letra]++
        } else {
            contadorLetras[letra] = 1
        }
        //contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
        /*¿Qué hace esta línea paso a paso?
contadorLetras[letra]:
Busca si ya existe esa letra en el diccionario.

Si existe, devuelve su valor (por ejemplo, 3 si ya la había contado 3 veces).

Si no existe, devuelve undefined.

contadorLetras[letra] || 0:
Usa el operador lógico OR (||).

Si contadorLetras[letra] tiene un valor (por ejemplo, 3), lo usa.

Si es undefined, toma 0.

+ 1:
Sea cual sea el valor que tenga (3 o 0), le suma 1.

contadorLetras[letra] = ...:
Actualiza el valor en el diccionario con el nuevo conteo.
    })

    return contadorLetras

}

console.log(numVecesLetraFrase('mamMaass'))*/



//Version para contar palabras en lugar de letras
// function numVecesLetraFrase(frase: string): { [palabras: string]: number } {
//     frase = frase.toLowerCase().replace(/[.,!?]/g, ""); //limpieza basica
//     let contadorPalabras: { [letra: string]: number } = {} //declaramos diccionario. 
//     const aFrase = frase.split(' ');//separamos por espacios

//     aFrase.forEach((palabra) => {
//         if (contadorPalabras[palabra]) {
//             contadorPalabras[palabra]++
//         } else { contadorPalabras[palabra] = 1 }

//     })

//     return contadorPalabras

// }

// console.log(numVecesLetraFrase('Hola mundo mundo,mundo'))

//version para encontrat la letra que mas se repite

/*function letraMasRepetida(frase: string): { letra: string; cantidad: number } {
  frase = frase.toLowerCase().replace(/ /g, "");
  const contadorLetras: { [letra: string]: number } = {};

  for (let letra of frase) {
    contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
  }

  let maxLetra = "";
  let maxCantidad = 0;

  for (let letra in contadorLetras) {
    if (contadorLetras[letra] > maxCantidad) {
      maxCantidad = contadorLetras[letra];
      maxLetra = letra;
    }
  }

  return { letra: maxLetra, cantidad: maxCantidad };
}

console.log(letraMasRepetida("anaconda"));*/


function segundaLetraMasRepetida(frase: string) {
  const fraseLimpia = frase.toLowerCase().replace(/ /g, "");
  const contadorLetras: { [letra: string]: number } = {};

  // Contar frecuencias de letras
  for (const letra of fraseLimpia) {
    contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
  }

  // Crear un array de las letras y sus frecuencias, y ordenarlas de mayor a menor
  const letrasOrdenadas = Object.entries(contadorLetras)
    .sort((a, b) => b[1] - a[1]); // Ordenar por cantidad de repeticiones

  // Obtenemos el valor máximo de frecuencia
  const maxCantidad = letrasOrdenadas[0][1];
  
  // Buscar la segunda letra con la frecuencia más alta que no sea igual a la máxima
  for (let i = 1; i < letrasOrdenadas.length; i++) {
    if (letrasOrdenadas[i][1] < maxCantidad) {
      // Devolvemos la segunda letra más repetida
      return { letra: letrasOrdenadas[i][0], cantidad: letrasOrdenadas[i][1] };
    }
  }

  // Si no encontramos una segunda letra distinta (es decir, todas tienen la misma frecuencia)
  return null;
}

console.log(segundaLetraMasRepetida("Hola que tal, hola hola"));