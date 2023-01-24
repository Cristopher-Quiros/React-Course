
 // Desestructuracion 
 // Asignacion desestructurante 

 const persona =  {
    nombre: 'Tony',
    edad: 15,
    clave: 'Ironman',
}

const { nombre, edad, clave } = persona

// console.log ( persona )
// console.log ( edad )
// console.log ( clave )


// Se pueden definir dentro de la funcion
// Si la propiedad esta definida en el objeto usa la del objeto, si no usa la que definimos
  const areContext = ({ nombre, edad, clave, rango = 'Comandante' }) => { 
    // console.log ( nombre, edad, clave, rango )
    // Siempre poner la coma xd

    return {
        nombreClave: clave,
        anos: edad,
        latlng: {
            lat: 14.15156,
            lng: -12.1246
        }
    }

  } 


  // Reto fallido
  // Una manera de extraer const { nombreClave, anos, latlng:{ lat, lng }} = areContext( persona )
  const { nombreClave, anos, latlng} = areContext( persona )
  const { lat, lng } = latlng

  
  console.log (nombreClave, edad)
  console.log (lat, lng )