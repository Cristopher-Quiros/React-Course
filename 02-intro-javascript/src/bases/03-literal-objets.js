const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
}

const persona2 = {...persona} // No se hace ni en pedo
persona2.nombre = 'Peter'  // Los tres puntos es para una copia exacta

console.log (persona)
console.log (persona2)
// console.table( persona )