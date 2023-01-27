import { useCounter } from "../hooks/useCounter"



export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter()


  return (
    <>

    <div>Counter with CustomHook: { counter }</div>
    <hr/>

    <button className="btn btn-primary" onClick={ increment }>+1</button>
    <button className="btn btn-primary" onClick={ decrement }>-1</button>
    <button className="btn btn-primary" onClick={ reset }>Reset</button>
    </>
  )
}
