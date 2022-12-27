import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('testing on <AddCategory />', () => {
    
    test('change the vaue of the text box', () => {
        
        render( <AddCategory onNewCategorie={ () => { } } /> );
        const input = screen.getByRole('textbox')

        fireEvent.input( input, {target: {value:'Saitama'} } );

        expect(input.value).toBe('Saitama')
        // screen.debug();

    });

});
