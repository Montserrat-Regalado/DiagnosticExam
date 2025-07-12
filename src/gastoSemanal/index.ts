//Mini ejerciciio usando forEach
//Sumar gastos del mes

/*function gastoMensual(gastos: number[][]):{total:number,promedio:number}{
    let total:number=0;
    let promedio=0
    gastos.forEach(gasto => {
       const gastoSemana = gasto.reduce((acum, cantidad) => acum + cantidad, 0)
        total+=gastoSemana
        
    })
    promedio=total/gastos.length
    return {promedio,total}
}
console.log(gastoMensual([[250, 250], [600, 600]])) */


function controlGastos(gastos: number[][]): { total: number, promedio: number } {
    let total = 0
    let gastoSemanal = 0

    gastos.forEach((gasto, i) => {
        gastoSemanal = gasto.reduce((acum, cantidad) => acum + cantidad)

        console.log(`Semana ${i + 1}: ${gastoSemanal}`)
        if (gastoSemanal > 1500) { console.log(`Semana ${i + 1}: Gastaste maas de $1500 (${gastoSemanal})`) }
        total += gastoSemanal
    })

    let promedio = total / gastos.length
    return { total, promedio }
}

console.log(controlGastos([
    [200, 300, 150],
    [600, 400, 800],
    [500, 300, 200]
]))