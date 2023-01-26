import { render, screen } from '@testing-library/react'
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => { 

    const category = 'One Punch'

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true
        })
        
        render( <GifGrid category={ category }/>)
        screen.debug()
        expect( screen.getByText('Cargando...') )
        expect( screen.getByText( category ) )
     })

     test('Debe de mostar items cuando se cargan las imagenes del useFetchGifs', () => { 

        const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost:3000'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://facebook.com'
        }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false
        })

        render( <GifGrid category={ category }/>)
        screen.debug()
        expect( screen.getAllByRole('img').length ).toBe(2)
        
      })
 })