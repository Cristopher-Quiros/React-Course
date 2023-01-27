import { useEffect } from "react"
import { useState } from "react"


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
        
    })
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
    </>
  )
}
