
import { getHeroeById } from './bases/08-import-export'
 
// const promesa = new Promise( (resolve, reject) => {
//    setTimeout ( () => {

//        const p1 = getHeroeById(2)
        // console.log(heroe)
//        reject( 'No se pudo encontrar el heroe' );


        //console.log('Dos segundos despues')

        //resolve()
//    }, 2000)
// })

// promesa.then( (heroe) => {
//    console.log('heroe', heroe)
//})
// .catch( err => console.warn (err)) // para mandar alerta en la consola

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
           setTimeout ( () => {
              const p1 = getHeroeById( id )

              p1 ? resolve(p1) : reject('No se pudo encontrar el heroe') //Para evitar el uso del If y Else
              // console.log(p1)
              // resolve(p1);
                //console.log('Dos segundos despues')
                //resolve()
          }, 2000)
     })
}
getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn)
// .catch(err => console.warn(err))