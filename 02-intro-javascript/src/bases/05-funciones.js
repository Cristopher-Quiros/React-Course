
// Funciones en JS
//const saludar = function ( nombre ){
//    return `Hola, ${ nombre }`
// 


// Funciones en flecha 
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }` // Solo si tiene un return 
// console.log( saludar('Cristopher') )
console.log (saludar2(`Arturo `))
console.log (saludar3(`Cristopher`))

// El return de una funcion en flecha es un objeto

const getUser = () => ({
    uid: 'asdasd',
    username: 'asdasdasda'
})

 console.log( getUser() )

 // Tarea 

 const getUsuarioActivo = ( nombre ) =>
     ({
        uid: 'ABC123',
        username: nombre
    })
 
    // Para convertir una funcion a flecha, se tiene que hacer constante

 const usuarioActivo = getUsuarioActivo ('Cristopher ')
 console.log ( usuarioActivo )