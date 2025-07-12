interface User{
    nombre:string,
    edad:number
}
function ordenarUsuarios(usuario:User[]){
    const usuariosOrdenados=usuario.sort((a,b)=>a.edad-b.edad)
    return usuariosOrdenados
}
const valorUsuario=ordenarUsuarios([{nombre:'Montse',edad:36},{nombre:'Carlos',edad:28}])
console.log(valorUsuario)