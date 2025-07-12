// * Mio

//? CHATGPT

//* Declara una funcion que espera dos parametros de tipo string, devuelve un valor boleano
function hasMatch(s: string, p: string): boolean {
    //*Declara una variable llamada i de tipo numerica inicializada en 0
    let i = 0;
    //* Se inicia el ciclo for, split divide la cadena patron con * y cada valor lo guarda en t
    for (const t of p.split('*')) {
        //*Se busca en en el arrglo t la primer coincidencia que tenga con s desde el indicie i y lo guarda en j
        const j = s.indexOf(t, i);

        //* Se condiciona, si en la busqueda anterior no dio ninguna coincidencia devuelve -1 y termina el programa
        if (j === -1) {
            return false;
        }//* Incrementa el indice i, suma indice j mas el largo del array t
        i = j + t.length;
        //*console.log({ j, i, t })
    }//* Sale del ciclo y regresa true porque el for se cumplio
    return true;
}
//*hasMatch("maria", "m*a*ri*a")





/*function subcadena(s: string, p: string):boolean {
    let i = 0;
    for (const t of p.split('*')) {
        const j = s.indexOf(t, i)
        if (j === -1) {
            return false
        }
        i=j+t.length
    }
    return true
};

//*console.log(subcadena('condominio','c**v'));




/*function patronCoincidencia(cadena:string,cadenaPatron:string):boolean{
    let i=0
    for( const subcadena of cadenaPatron.split('*')){
        const j = cadena.indexOf(subcadena,i)
        if(j===-1){
            return false
        }
        i=j+cadenaPatron.length
    }
    return true
}

console.log(patronCoincidencia('venga','v*o'))

function patronCoincidencia(cadena:string,cadenaPatron:string):boolean{
    let i=0
    for( const subcadena of cadenaPatron.split('*')){
        const j = cadena.indexOf(subcadena,i)
        if(j===-1){
            return false
        }
        i=j+subcadena  .length
    }
    return true
}

console.log(patronCoincidencia('openai','ope*ai'))*/





function subcadenas1(s:string,p:string):boolean{
    s=s.toLocaleLowerCase();
    p=p.toLocaleLowerCase();

    function caracteresEspeciales1(str:string):string{
        return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    }

    //*const caracteresEspeciales2=(str:string):string=>str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

   //* p=caracteresEspeciales2(p)
    p=caracteresEspeciales1(p)

    let i=0;
    for(const t of p.split("\\*")){
        console.log(t)
        const j=s.indexOf(t,i)
        if(j===-1){
            return false
        }
        i=j+t.length
    }

    return true

}

console.log(subcadenas1("openAI","o*i"))


/*¿Qué resultado da el siguiente caso? hasMatch("openai", "o*i") Respuesta= true porque gracias la asterisco se permite n cantidad de caracteres, 
¿Qué resultado da este caso? hasMatch("programming", "p*g*") Respuesta= True, al final el arreglo tiene un valor vacio 
¿Cómo puedes modificar el código para que ignore la sensibilidad a mayúsculas y minúsculas? Respuesta= Comvertir s y p a minusculas para que no interfiera
¿Qué resultado esperarías para hasMatch("abcdef", "x*y*z")? Explica por qué. Respuesta= False porque no coincide desde el indice 0 asi que sale del algorimo
Si p es una cadena vacía (""), ¿qué devuelve la función? ¿Por qué? Respuesta= False porque no tiene ningun valor para validar
¿Cómo modificarías el algoritmo para manejar subcadenas con caracteres especiales como . o ? que podrían interferir con la lógica?*/




/*
//*¿Qué es una subcadena? ¿Cómo se diferencia de una subsecuencia?
//*Una subcadena consiste en una secuencia continua de caracteres dentro de una cadena, mientras que una subsecuencia puede omitir caracteres, pero el orden debe mantenerse.

//*¿Qué hace el método split('*') en una cadena como "a*b*c"?
//*Divide la cadena cada que se ecuentre un * y los devuelve como arrray

//*¿Qué devuelve el método indexOf si no encuentra el valor buscado en la cadena?
//*-1

En el código de hasMatch, ¿cuál es el propósito de la variable i?
//*La variable i almacena la posición donde debe comenzar la siguiente búsqueda en s. No solo se incrementa, sino que se actualiza con la posición del final del último fragmento encontrado (j + t.length). Esto asegura que las partes de p.split('*') se encuentren en el orden correcto dentro de s.

//*¿Qué significa la condición j === -1 dentro del bucle for?
//*Si indexOf no encontro ninguna coincidencia devuelve -1 asi que si es igual al indice j tiene que terminar el problema

¿Qué sucede cuando una subcadena de p.split('*') no se encuentra en s?*/
//*Sale del programa y regrresa un false

/*
//*¿Cómo afecta el valor inicial de i (cero) al funcionamiento del algoritmo?
//*Al ser i el indice, el valor cero hace que se coloce desde la primer posicion para desde ahi iniciar el recorrido de busqueda de coincidencia.

//*¿Por qué se usa s.indexOf(t, i) en lugar de s.indexOf(t)?
//*Porque indexOf necesita saber el indice del cual tiene que empezar a buscar, por default es cero, pero se lo especificamos para irlo actualizando.

//*¿Qué hace la instrucción i = j + t.length? ¿Por qué es importante actualizar el valor de i?
//*Actualiza el valor del indice, es imporante para que en cada recorrido que hace el bucle logre encontrar la coincidencia 

//*¿Qué pasaría si en lugar de un for...of usamos un bucle for con índices en p.split('*')?
//*Un bucle for con índices funcionaría de forma similar, pero tendrías que manejar explícitamente el índice para acceder a los elementos de p.split('*'). La diferencia principal es que el for...of es más limpio y directo, ya que se enfoca en los elementos en lugar de los índices.
const parts = p.split('*');
for (let k = 0; k < parts.length; k++) {
    const t = parts[k];
    // resto del código
}

¿Cuál sería el resultado de hasMatch("abcde", "a*d") y por qué?
//*True, porque cumple con la regla cadena de patron 

¿Qué sucede si p no contiene asteriscos? Por ejemplo, hasMatch("abcde", "abc").*/
//* true porque al no encontrar * no divide nada por lo tanto encuentra la coincidencia exacta de abc

/*
//*¿Cómo se comporta el algoritmo cuando p contiene múltiples asteriscos consecutivos, como "a**b*c"?
//* Al ser el * el caracter que divide, al encontrar dos consecutivos  genera un array con un valor vacio. 

Si s y p tienen la misma longitud, ¿en qué casos el algoritmo devuelve true?
//* En el caso donde t coincida con s en caso contrario devuelve false 
//* CHATGPT: Para que devuelva true, el patrón p debe coincidir con s respetando las posiciones y cualquier asterisco debe coincidir con 0 o más caracteres consecutivos en s. Si no hay asteriscos en p, la comparación debe ser exacta.

¿Qué ocurriría si en lugar de split('*') utilizáramos split('') en el código?
//*El metodo split requiere de un separador al dejarlo vacio cualquier valor que ingrese y coincida con s devolvera true
//*CHATGPT: split('') divide la cadena en un arreglo de caracteres individuales.Esto cambiaría completamente el propósito del algoritmo, ya que intentaría buscar cada carácter de p en s de forma independiente, lo cual no respeta el concepto de subcadenas divididas por asteriscos.
/ / ? 

¿Es posible que el algoritmo termine antes de recorrer todas las partes de p.split('*')? ¿En qué casos sucede?
//* El algoritmo termina anticipadamente si encuentra que una parte de p.split('*') no está en s. Esto sucede porque, en ese caso, el patrón no puede coincidir, y el algoritmo retorna inmediatamente false.

¿Cuál es la complejidad temporal del algoritmo? ¿Qué influye más en su rendimiento?
//*La complejidad temporal del algoritmo es O(n * m), donde: n es la longitud de s, m es el número de partes en p.split('*'). Esto se debe a que el método indexOf puede recorrer toda la cadena s en el peor caso, y se llama una vez por cada parte de p.split('*'). Lo que más influye en el rendimiento es el tamaño de s y cuántas veces el algoritmo necesita realizar búsquedas usando indexOf.

Si p comienza o termina con un asterisco, ¿cómo afecta eso al comportamiento del algoritmo?*/
//*Si p comienza o termina con un asterisco, el primer o último valor de p.split('*') será una cadena vacía (""). Esto no introduce errores porque el algoritmo no busca cadenas vacías en s. Simplemente ignora esos valores vacíos y continúa con las demás partes de p.split('*').

/*¿Cómo saber la complejidad temporal de un algoritmo?
La complejidad temporal mide cuántas operaciones realiza un algoritmo en función del tamaño de sus entradas. Para analizarla:

Identifica los bucles y operaciones dentro del código.
Determina el peor caso de cada operación.
Multiplica las complejidades de las operaciones anidadas.*/