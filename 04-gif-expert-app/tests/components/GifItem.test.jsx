import { render, screen, fireEvent } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('testing on <GifItem />', () => {
    
    const id = 100;
    const title = "My title";
    const url = "http://localhost/not-exit";


    test('should match with the snapshot', () => {
        
        const {container} = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('should show the image with the URL and ALT', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        const {src, alt} = screen.getByRole("img");
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

});
