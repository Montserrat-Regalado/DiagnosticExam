function contarVocales(str: string):number {
    let contadorVocales: number = 0;
    str = str.toLowerCase();
    const letra = str.split('');

    letra.forEach((vocal) => {
        if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
            contadorVocales++
        }
    });
    return contadorVocales

}

console.log(contarVocales('hola'))


//Codigo mas compacto y moderno
/*
const vocales = ['a', 'e', 'i', 'o', 'u'];
if (vocales.includes(vocal)) {
  contadorVocales++;
}
*/
