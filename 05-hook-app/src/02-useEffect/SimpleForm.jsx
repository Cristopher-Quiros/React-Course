import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'cristopherquiros2@gmail.com'
    })

    const { username, email} = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }
    useEffect( () => {
       // console.log('useEffect Called!')
    }, []) // Solo se va a disparar una vez con un arreglo vacio

    useEffect( () => {
       // console.log('FormState Changed!')
    }, [formState]) 

    useEffect( () => {
       // console.log('Email Changed!')
    }, [ email ]) 
    
  return (
    <>
        <h1> Formulario Simple</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        
        <input
            type="email"
            className="form-control mt-2"
            placeholder="cristopherquiros2@gmail.com"
            name="email"
            email={ email }
            onChange={ onInputChange }
        />

        {
           ( username === 'strider2') && <Message/>
        }
    </>
  )
}
