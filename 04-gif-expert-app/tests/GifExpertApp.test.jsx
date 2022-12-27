import { render, screen, fireEvent, renderHook, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Test in <GifExpertApp />', () => {    
    test('should return the initial state', () => {
        
        render( <GifExpertApp /> );
        screen.debug();

        const category = 'One Punch';
        expect(screen.getByText("GifExpertApp"));
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));

    });

    test('should return the initial state', () => {
        
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        const inputValue = "Dragon Ball";
        fireEvent.input( input, {target: {value:inputValue} } );
        expect( input.value ).toBe(inputValue);

        fireEvent.submit( form );
        expect( input.value ).toBe('');
        screen.debug();

        expect(screen.getByText(inputValue));
    });

});
