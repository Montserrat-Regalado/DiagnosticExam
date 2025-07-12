function palabrasFrecuentes(frase: string) {
    frase = frase.toLowerCase().replace(/[.,!?]/g, "");
    //onsole.log(frase)
    const palabras = frase.split(' ');
    const diccionarioContadorPalabras: { [palabra: string]: number } = {};

    for (const palabra of palabras) {
        /* if (diccionarioContadorPalabras[palabra]===undefined){
             diccionarioContadorPalabras[palabra]=1
         }else{
             diccionarioContadorPalabras[palabra]=diccionarioContadorPalabras[palabra]+1
         }*/

        //Toma el valor actual de la palabra si ya existe, si no usa 0... y luego súmale 1
        diccionarioContadorPalabras[palabra] = (diccionarioContadorPalabras[palabra] || 0) + 1


    }

    let palabraMasRepetida = '';
    let maxCantidad = 0;

    for (const palabra in diccionarioContadorPalabras) {
        if (diccionarioContadorPalabras[palabra] > maxCantidad) {
            maxCantidad = diccionarioContadorPalabras[palabra]
            palabraMasRepetida = palabra;
        }
    }
    console.log({ palabra: palabraMasRepetida, cantidad: maxCantidad })

}

palabrasFrecuentes("El sol brilla en el cielo, el sol está brillando");