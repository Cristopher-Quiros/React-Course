import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ])

    const onAddCategory = ( NewCategory ) => {    
        // setCategories( [ ...categories, 'Valorant' ] )
        if (categories.includes( NewCategory)) return;
        setCategories ( [ NewCategory, ...categories] )
        console.log( NewCategory )


    }

  return (
    <>
       <h1> GifExpertApp </h1> 
     
       <AddCategory 
            onNewCategory= { onAddCategory }
       //setCategories={ setCategories }
       />
        { 
        categories.map( category => (
            <GifGrid 
            key={category}
            category={category}
            />
        ))
        }
    </>
  )
}
