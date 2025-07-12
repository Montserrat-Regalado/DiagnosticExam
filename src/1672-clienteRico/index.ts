/*function riquezaMaxima(cuentas: number[][]) {
    let maximo: number = 0;

    cuentas.forEach(cliente=>{
        const total = cliente.reduce((acum,cuenta)=>acum+cuenta,0);
        if(total>maximo){
            maximo=total;
        }
    })

    return maximo
}*/

//console.log(riquezaMaxima([[2,8,7],[7,1,3],[1,9,5]]))

/*Conceptos clave

Término	             Qué es

acumulador (acum)	 Guarda una suma parcial que se va actualizando en cada vuelta.
cuenta	             Es cada valor dentro del array del cliente (por ejemplo 1, 2, 3).
total	             Es el resultado de sumar todas las cuentas de un cliente.
maximo	             Guarda la mayor cantidad total de dinero entre todos los clientes.*/

