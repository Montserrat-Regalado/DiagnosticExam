function letrasIgualesSeguidas(frase: string): any {
    let fraseNormalizada = frase.toLowerCase().replace(/ /g, "")
    let contadorLetras: number = 1
    let arrayFrase = fraseNormalizada.split('')
    const resultado: { [letra: string]: number[] } = {}
    //console.log(arrayFrase.length)
    for (let i = 0; i < arrayFrase.length; i++) {
        if (arrayFrase[i] === arrayFrase[i + 1]) {
            contadorLetras += 1
        } else {

            const letra = arrayFrase[i]
            if (!resultado[letra]) {
                resultado[letra] = []
            }
            resultado[letra].push(contadorLetras)
            contadorLetras = 1


        }

    }
    console.log(resultado);
}

letrasIgualesSeguidas('Calle nuevaa')
