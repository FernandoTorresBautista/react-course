import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('testing on <AddCategory />', () => {

    const inputValue = 'Saitama';

    test('change the vaue of the text box', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategorie={ onNewCategory } /> );
        const input = screen.getByRole('textbox')

        fireEvent.input( input, {target: {value:inputValue} } );

        expect(input.value).toBe(inputValue)
        // screen.debug();

    });

    test('should call onNewCategory if the input is not empty', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategorie={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value:inputValue} } );
        // here the value is inputValue
        // screen.debug();

        fireEvent.submit( form );
        // here the value is empty
        // screen.debug();

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

    });

    test('shouldn\'t call the onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategorie={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value:""} } );
        fireEvent.submit( form );
        
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    });

});
