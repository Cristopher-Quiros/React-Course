import { memo } from 'react'

export const Small = memo(({ value }) => {

  console.log('Me volvi a dibujar oe pe ctm hdp, que me haces dibujarme de nuevo')
  
  return (
    <small>{ value }</small>
  )
})
