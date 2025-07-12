//Declaracion de funcion que espera un parametro de tipo numerico y especifica que la declaracion regresa un valor nuemrico
/*function subtractProductAndSum(n: number):number{
    //Declara variables x y y para la multiplicaion y la suma respectivamente (x inicia en 1 por la identidad multiplicativa y y inicia en 0 por la identidad aditiva)
    let [x, y] = [1, 0];
    //estructura de: for (inicializacion;condicion;actualizacion), pero CADA UNA DE SUS PARTES ES OPCIONAL.
    //no iniicializa nada porque n ya lo tenemos declarado, condiciona que n sea mayor de 0 y divide entre 10 utilizando floor para redondear para abajo y pasar al siguiente digito     
    for (; n > 0; n = Math.floor(n / 10)) {
        //saca el modulo de n (lo que sobra de dividir entre 10) y lo asigna a v
        const v = n % 10;
        // x multiplica su valor con v asignandose asi mismo el resultado
        x *= v;
         // y suma su valor con v asignandose asi mismo el resultado
        y += v;
    }
    //sale del ciclo y regresa la diferencia entre x y y
    return x - y;
}

console.log(subtractProductAndSum(896))*/









function diferenciaProducto(n: number): number {
    let x = 1;
    let y = 0;
    for (; n > 0; n = Math.floor(n / 10)) {
        let v = n % 10
        x = x * v;
        y = y + v
    }
    return x - y
}

console.log(diferenciaProducto(100))


/*function RestaWhile(n: number):number {
    let x = 1
    let y = 0
    while (n > 0) {
    let v = n % 10
        x *= v;
        y += v;
        n = Math.floor(n / 10)

    }
    return x - y
}*/













