import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe (' Pruebas en Counter App', () => {

    const InitialValue = 10

    test (' El CounterApp debe hacer match con el snapshot ', () => {
        const { container } = render ( <CounterApp value={ InitialValue }/>)
        expect ( container ).toMatchSnapshot()
    })

    test ('Debe de mostar el value en 100 en el CounterApp', () => {
        render ( <CounterApp value={ 100 }/>)
        expect ( screen.getByText(100) ).toBeTruthy()
       // expect (screen.getByRole('heading', {level: 2}).innerHTML).toContain( '100' )
    })

    test (' Debe de incrementar con el boton +1', () => {

        render ( <CounterApp value={ InitialValue }/>)
        fireEvent.click( screen.getByText( '+1'))
        expect ( screen.getByText('11').toBeTruthy)

    })

    test (' Debe de disminuir con el boton -1', () => {

        render ( <CounterApp value={ InitialValue }/>)
        fireEvent.click( screen.getByText( '-1'))
        expect ( screen.getByText('9').toBeTruthy)

    })

    test (' Debe de restablecer el contador con el boton reset', () => {

        render ( <CounterApp value={ InitialValue }/>)
        fireEvent.click( screen.getByText( '+1'))
        fireEvent.click( screen.getByText( '+1'))
        fireEvent.click( screen.getByText( '+1'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        // fireEvent.click( screen.getByText( 'Reset'))
        // expect ( screen.getByText(InitialValue).toBeTruthy)
        
        
        

    })
})