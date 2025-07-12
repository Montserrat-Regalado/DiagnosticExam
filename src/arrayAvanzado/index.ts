// const productosEnCarrito = [
//     { name: 'Camsia', price: 20 },
//     { name: 'pantalon', price: 30 },
//     { name: 'zapatos', price: 50 }
// ]

// //1. Total del carrito
// const totalCarrito = productosEnCarrito.reduce((acum, item) => acum + item.price, 0);
// console.log(`El total de los productos es: ${totalCarrito}`)

// //Hay algun producto mayor a 40?
// const mayor4 = productosEnCarrito.some((item) => item.price > 40)
// console.log(`Producto mayor a $40?`, mayor4)

// //Tods los productos valen mas de $10?
// const precioMinimo = productosEnCarrito.every((item) => item.price > 10)
// console.log(`Todos los productos valen mas de 10?`, precioMinimo)

// //Encuentre el producto llamado 'pantalon'
// const pantalon = productosEnCarrito.find((item) => item.name.toLowerCase() === 'pantalon')
// console.log(`producto:`, pantalon)


//reto 1 del dia
/*
--Crea una funcion que reciba un array de numeros y devuelva true si todos son positivos. 
--Haz una funcion que tome un array de strings y devuelva una sola cadena con todas las palabras separadas por coma
--Usa reduce para contar cuantas veces aparece cada palabra en este array:
['manzana','pera','manzana','durazno','pera','manzana']
*/

function numerosPositivos(arr: number[]) {
    return arr.every((num) => num > 0)
}
const arrayNum = [1, 2, 3,]
//console.log(numerosPositivos(arrayNum))

function arrayStrings(arr: string[]) {
    return arr.join(', ')
}
const arrStrings = ['mama', 'hola', 'te', 'extrano']
//console.log(arrayStrings(arrStrings))


function contarPalabras(palabras: string[]) {
    //acum es un ubjeto donde se guarda el conteo de cada fruta 
    return palabras.reduce((acum: { [key: string]: number }, fruta) => {
        if (acum[fruta]) {
            acum[fruta]++;
        } else {
            acum[fruta] = 1;
        }
        return acum;
    }, {});
}

const arrayFrutas = ['manzana', 'pera', 'manzana', 'durazno', 'pera', 'manzana']
//console.log(contarPalabras(arrayFrutas))
//output: manzana:3,pera:2,durazno:3

//Reto 2 del dia
/*Agrupar productos por categoria*/

const products = [
    { nombre: 'manzana', categoria: 'fruta' },
    { nombre: 'pera', categoria: 'fruta' },
    { nombre: 'zanahoria', categoria: 'verdura' },
    { nombre: 'espinaca', categoria: 'verdura' },
    { nombre: 'fresa', categoria: 'fruta' },
]
function agruparCategoria(products: { nombre: string; categoria: string }[]): { [categoria: string]: string[] } {
    return products.reduce((acum: { [key: string]: string[] }, prod) => {
        if (acum[prod.categoria]) {
            acum[prod.categoria].push(prod.nombre)

        } else {
            acum[prod.categoria] = [prod.nombre]
        }
        return acum
    }, {})
}
//console.log(agruparCategoria(products))


//clientes que han gastado mas de 100

const clientes = [
    { nombre: 'Zamarripa', compras: [50, 30, 40] },
    { nombre: 'Luis', compras: [20, 10, 75] },
    { nombre: 'Martha', compras: [100, 80, 60] },
    { nombre: 'Pedro', compras: [15, 20, 25] }
]
//Usar map para calcular cuanto ha gastado cada cliente en total.
function gastoCliente(cliente: { nombre: string; compras: number[] }[]): { clienteFiltrado: string[], totalGastado: number } {
    //let total: number = 0;
    const total = cliente.map((gasto) => {
        const suma = gasto.compras.reduce((tot: number, cant) => tot + cant, 0);
        return { nombre: gasto.nombre, total: suma }
    });
    const cteGastador = total.filter((cte) => cte.total > 100)
    const totalGastado = cteGastador.reduce((acum, cte) => acum + cte.total, 0)
    const clienteFiltrado = cteGastador.map((cte) => cte.nombre);
    clienteFiltrado.sort()


    return { clienteFiltrado, totalGastado }

};
//console.log(gastoCliente(clientes))


//Usar filter para quedarte solo son los clientes que gastaron mas de 100
//Usar reduce para sumar el gasto total de estos clientes filtrados.

const productos2 = [
    { nombre: 'Laptop', precio: 15000 },
    { nombre: 'Mouse', precio: 500 },
    { nombre: 'Monitor', precio: 3000 },
    { nombre: 'Teclado', precio: 700 },
]

function ordenarElementos() {
    const copiaProductos = [...productos2].sort((a, b) => b.precio - a.precio)
    return copiaProductos
}

//console.log(ordenarElementos())

const clientes2 = [
    { nombre: 'Ana', compras: ['manzana', 'pera'] },
    { nombre: 'Luis', compras: ['zanahoria', 'lechuga'] },
    { nombre: 'sofia', compras: ['Sandia'] },
]

function unirArray() {
    const union = clientes2.flatMap((c) => c.compras)
    const comprasFiltradas = union.filter((fruta) => fruta.toLowerCase().startsWith('s'))

    return comprasFiltradas
}
//console.log(unirArray())

const tienda = {
    frutas: [
        { nombre: 'manzana', precio: 10 },
        { nombre: 'platano', precio: 5 },
    ],
    verduras: [
        { nombre: 'zanahoria', precio: 4 },
        { nombre: 'lechuga', precio: 7 },
    ],
    lacteos: [
        { nombre: 'leche', precio: 15 },
        { nombre: 'yogurt', precio: 12 },
    ],
}
function unirProductos() {
    const unionTienda = Object.values(tienda)
    const todosProductos = unionTienda.flat(2)

    return todosProductos
}
//console.log(unirProductos())

const pedidos = [
    { cliente: 'Ana', ordenes: [{ producto: 'pan', precio: 20 }, { producto: 'leche', precio: 25 }] },
    { cliente: 'Luis', ordenes: [{ producto: 'carne', precio: 60 }] },
]

function mostrarPedido() {
    const unionPedidos = pedidos.flatMap((ped) => ped.ordenes)
    const pedidosFiltrados = unionPedidos.filter((p) => p.precio <= 25)
    return pedidosFiltrados.map((nom) => nom.producto)

}
//console.log(mostrarPedido())


const productos3 = [
    { id: 1, nombre: 'Pan', categoria: 'panaderia', precio: 25 },
    { id: 2, nombre: 'Leche', categoria: 'Lacteos', precio: 18 },
    { id: 3, nombre: 'Pan', categoria: 'Lacteos', precio: 52 },
    { id: 4, nombre: 'Baguette', categoria: 'panaderia', precio: 30 },
    { id: 5, nombre: 'Yogurt', categoria: 'Lacteos', precio: 14 }
];

export function imprimirCategoria() {
    const categoria = productos3.map((p) => {
        return { nombre: p.categoria }
    });
    console.log(categoria)
}
function sumaCate() {
    return productos3.reduce((acum, p) => acum + p.precio, 0)
}
function filtrarPrecio() {
    return productos3.filter((p) => p.precio > 20)
}
function duplicadoNombre(){
    const conteoNombres={};
    for (let producto of productos3){
        const nombre=producto.nombre
        if(conteoNombres[nombre]){
            conteoNombres[nombre]+=1
        }else{
            conteoNombres[nombre]=1
        }
    }
    const duplicados=[]
    for (let nombre in conteoNombres){
        if(conteoNombres[nombre]>1){
            duplicados.push(nombre)
        }
    }
    console.log('Productos duplicados', duplicados)
}
// function duplicadoNombre() {
//     const nombresGuardados = new Set();
//     for (let p of productos3) {
//         const nombre=p.nombre
//         if (nombresGuardados.has(nombre)) {
//             console.log('Duplicado')
//             return true
//         }
//         nombresGuardados.add(nombre)
//     }
//     console.log('No hay duplicado')
//     return false

// }

const stock=[
    {id:1,cantidad:12},
    {id:2,cantidad:5},
    {id:3,cantidad:8},
    {id:4,cantidad:6},
    {id:5,cantidad:10},
]
function stockProductos3(){
    const unionProd=productos3.map((e)=>{
        const stockA=stock.find((p)=>p.id===e.id)
        if(stockA){
            return {...e,...stockA}
        }else{
            return e
        }
    })
  
    return unionProd
}

imprimirCategoria()
console.log(sumaCate())
filtrarPrecio()
console.log(filtrarPrecio())
duplicadoNombre()
console.log(stockProductos3())