
// Arreglos en JavaScript = coleccion de informacion en una misma variable
// El push modifica el objeto principal
// Array = arreglo

const arreglo = [1,2,3,4]

let arreglo2 = [...arreglo,5] 
// let arreglo2 = [1,2,3,4,5] Ejercicio malo


// Esto es un callback, es una funcipon que se ejecuta dentro de este metodo

// Esto es un nuevo arreglo
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2
})



console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)



// arreglo.push()

