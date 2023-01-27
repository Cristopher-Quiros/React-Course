import { useState } from "react"


export const useCounter = ( InitialValue = 10 ) => {

    const [counter, setCounter] = useState( InitialValue )

    const increment = () => {
        setCounter ( counter + 1)
    }

    const decrement = () => {
        setCounter ( counter - 1)
    }

    const reset = () => {
        setCounter ( InitialValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset


    }
}