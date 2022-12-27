import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('testing on <AddCategory />', () => {

    const inputValue = 'Saitama';

    test('change the vaue of the text box', () => {
        
        render( <AddCategory onNewCategorie={ () => { } } /> );
        const input = screen.getByRole('textbox')

        fireEvent.input( input, {target: {value:inputValue} } );

        expect(input.value).toBe(inputValue)
        // screen.debug();

    });

    test('should call onNewCategory if the input is not empty', () => {
        render( <AddCategory onNewCategorie={ () => { } } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value:inputValue} } );
        // here the value is inputValue
        // screen.debug();

        fireEvent.submit( form );
        // here the value is empty
        // screen.debug();

        expect( input.value ).toBe('');

    });

});
