//Ejercicio 1: "Contar letras"  Crea una fucnion que cuente cuantas veces aparece cada letra en una palabra. 

function numVecesLetra(palabra:string){
    const palabraLimpia=palabra.replace(/ /g, '').toLowerCase().split('');
    let object:{[key:string]:number}={}
    palabraLimpia.forEach((letra)=>{
        if(object[letra]>0){
            object[letra]++

        }else{
            object[letra]=1
        }
    })

    let almacenaMaximo=0
    let letraMaximo=''

    for(const key in object){
        if(object[key]>almacenaMaximo){
            almacenaMaximo=object[key]
            letraMaximo=key
        }
    }
    return `letra: ${letraMaximo}, cantidad: ${almacenaMaximo}`
    
}
//console.log(numVecesLetra('banana'))

//catalago de productos. Objetivo: 
/*Crear una estructura que represente productos
Filtrar productos por categoria
Buscar productos por nombre
calcular el total de precios*/


    //let arrayProductos=[{nombre:'',precio:0,categoria:''}]
    type Producto={
        nombre:string;
        precio:number;
        categoria:string;
    }
    const productos:Producto[]=[
        {nombre:'Jugo natural',precio:25,categoria:'Bebidas'},
        {nombre:'Bunuelo',precio:15,categoria:'Dulces'},
        {nombre:'Pastel de vainilla',precio:40,categoria:'Dulces'},
        {nombre:'Carlota de limon',precio:35,categoria:'Postres'},
        {nombre:'Agua de horchata',precio:20,categoria:'Bebidas'},
    ];

function buscarNombre(nombre:string){
    let producto =productos.find(p=>p.nombre.toLowerCase()===nombre.toLowerCase())
    return producto;
}
console.log(buscarNombre('Bunuelo'))

function filtrarCategoria(categoria:string){
    return productos.filter(p=>p.categoria.toLowerCase()===categoria.toLowerCase())
}
console.log(filtrarCategoria('dulces'))

function calculoTotal(){
    return `El total del catalogo: ${productos.reduce((total,prod)=>total+prod.precio,0)}`
}
console.log(calculoTotal())