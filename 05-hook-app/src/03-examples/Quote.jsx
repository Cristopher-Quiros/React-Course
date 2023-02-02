import { useRef } from "react"
import { useLayoutEffect } from "react"


export const Quote = ({author, quote}) => {

  const pRef = useRef()

  useLayoutEffect(() => {
    
  }, [quote])

  return (
    <blockquote className="blockquote text-end"
    style={{ display: 'flex' }}>
        <p ref={ pRef } className="mb-1">{ quote }</p>
       <footer className="blockquote-footer"> {author} </footer>
    </blockquote>
  )
}
