
const personajes = [ 'Goku', 'Vegeta', 'Trunks']

const [ , , p3 ] = personajes

// console.log( p3 )

const retornaArreglo = () =>{
    return ['ABC', '123']
}

const [ letras, numeros ] = retornaArreglo()

// console.log ( letras, numeros )

// Ejercicio 

const areState = ( valor) => {
    return [ valor, ()=>{console.log('Hola Mundo')}]
}
const [nombre, setNombre] = areState( 'Goku' )

console.log(nombre)
setNombre() // Asi tambien se puede llamar a consola
