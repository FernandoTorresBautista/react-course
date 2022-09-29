import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    // test('should match with the snapshot', () => {
        
    //     const title = 'Hola, soy Goku';
    //     const {container} = render( <FirstApp title={ title } /> );

    //     // eval the entire html
    //     expect( container ).toMatchSnapshot();

    // });

    test("should show the title in a tag H1", () => {

        const title = 'Hola, soy Goku';
        const {container, getByText, getByTestId} = render( <FirstApp title={ title } /> );

        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe( title );
        // expect(h1.innerHTML).toContain( title ); // if we have spaces in the tag

        expect( getByTestId('test-title').innerHTML ).toBe( title );
        expect( getByTestId('test-title').innerHTML ).toContain( title );

    });

    test('should show the subtitle sending for us', () => {
        
        const title = 'Hola, soy Goku';
        const subtitle = 'Soy un subtitulo';
        const {getByText} = render( 
            <FirstApp 
                title={ title } 
                subTitle={ subtitle } 
            /> 
        );
        expect( getByText(subtitle) ).toBeTruthy();

    });

});
