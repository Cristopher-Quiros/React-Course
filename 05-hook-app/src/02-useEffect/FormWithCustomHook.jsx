import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "../hooks/useForm"



export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //  const { username, email, password } = <form action=""></form>

  return (
    <>
        <h1> Formulario con Custom Hook</h1>
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

        <input
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            email={ password }
            onChange={ onInputChange }
        />

        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
    </>
  )
}
