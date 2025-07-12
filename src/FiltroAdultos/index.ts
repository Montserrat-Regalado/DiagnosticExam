interface Usuario{
    nombre:string;
    edad:number;
}
function filtroAdultos(usuarios:Usuario[]):Usuario[]{
    const mayorEdad=usuarios.filter((u)=>u.edad>18)
    return mayorEdad
}
const valores=filtroAdultos([{nombre:'Montse',edad:26},{nombre:'Leah',edad:6}])
console.log(valores)