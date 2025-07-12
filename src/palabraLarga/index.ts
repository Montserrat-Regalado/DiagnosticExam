// function palabraMasLarga(oracion:string):string{
//     let palabraLarga:string='';
//     const palabras =oracion.split(" ");

//     palabras.forEach((palabra)=>{
//         if(palabra.length>palabraLarga.length){
//             palabraLarga=palabra
//         }
//     })

//     return palabraLarga;
// }

// console.log(palabraMasLarga('El zorro come miels'))

//version con reduce

// const palabraLarga=palabraMasLarga.reduce((acc,palabra)=>{
//     return palabra.length>acc.length?palabra:acc;
// },'')
function palabraMasLarga(oracion:string):string{
  
    const palabras =oracion.split(" ")

    const palabraLarga=palabras.reduce((acc,palabra)=>{
         return palabra.length>acc.length?palabra:acc;
    },'')
  

    return palabraLarga;
}

console.log(palabraMasLarga('El zorro come mieles'))