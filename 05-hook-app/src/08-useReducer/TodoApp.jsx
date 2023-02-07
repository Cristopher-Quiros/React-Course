import { useReducer } from "react"
import { TodoList, todoReducer, TodoAdd } from "./index"




export const TodoApp = () => {

    const handleNewTodo = ( todos )

    const [ todos, dispatch ] = useReducer( todoReducer, initialState )

    const initialState = [{
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() + 100,
        description: 'Recolectar la piedra del tiempo',
        done: false
    }]

    

  return (
    <>
    <h1>TodoApp</h1>
    <hr/>

    <div className="row">
        <div className="col-7">

            <TodoList/>

        </div>

    <div className="col-5"></div>
     
        <h4>Agregar TODO</h4>
        <hr/>
        <TodoAdd onNewTodo={ handleNewTodo }/>
 </div>


    </>
  )
}
