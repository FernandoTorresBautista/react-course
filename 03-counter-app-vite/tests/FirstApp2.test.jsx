import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    const title = 'Hola, soy Goku';
    const subtitle = 'Soy un subtitulo';

    test('should match with the snapshot', () => {
        
        const {container} = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test("should show the message 'Hola, soy Goku'", () => {

        render( <FirstApp title={ title } /> )
        screen.debug(); // have all the changes in the dom
        expect( screen.getByText(title) ).toBeTruthy();

    });

    test("should show the title in a tag H1", () => {

        render( <FirstApp title={ title } /> )
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toBe( title );

    });

    test('should show the subtitle sending for us', () => {
        
        render( 
            <FirstApp 
                title={ title } 
                subTitle={ subtitle } 
            /> 
        );
        expect( screen.getByText(subtitle) ).toBeTruthy();

    });

});
