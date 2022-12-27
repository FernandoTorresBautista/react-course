import { render, screen, fireEvent } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock("../../src/hooks/useFetchGifs");

describe('testing on <GifGrid />', () => {

    const category = 'One Punch';

    test('show the initial loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render( <GifGrid category={category} /> );
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
        
    });

    test('should show the items when the images are charged on useFetch', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render( <GifGrid category={category} /> );
        
        expect(screen.getAllByRole('img').length).toBe(2);
        // screen.debug();
        
    });

});
