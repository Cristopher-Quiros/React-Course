import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

  const { counter, increment, reset} = useCounter(1)

  const { state, data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  const { author, quote } = !!data && data[0];

  const getNextQuote = () => {
    if ( counter >= 5) reset()
    else increment(1)
  }

  return (
    
    <>

        <h1> BreakingBad Quotes</h1>
        <hr/>

        {
           isLoading ? (
            <div className="alert alert-info text-center">
          Cargando...
            </div>
           )
           : (
           <blockquote className="blockquote text-end">
           <p className="mb-1">{ quote }</p>
           <footer className="blockquote-footer"> {author} </footer>
            </blockquote>)
        }

        <button className="btn btn-primary" onClick={ getNextQuote } disabled={ isLoading }>
          Next quote
        </button>
    </>
  )
}
