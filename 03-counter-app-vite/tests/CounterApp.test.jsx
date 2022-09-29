import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('testing on <CounterApp />', () => {
    
    const initialVaue = 100;

    test('should match with the snapshot', () => {
        
        const {container} = render( <CounterApp value={ initialVaue } /> );
        expect( container ).toMatchSnapshot();

    });

    test("should show the value 100", () => {

        render( <CounterApp value={ initialVaue } /> )
        expect( screen.getByText(100) ).toBeTruthy();

        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100');

    });

    // simulate clicks & events
    test('should increment with the button +1', () => {
        
        render( <CounterApp value={ initialVaue } /> )
        fireEvent.click( screen.getByText("+1") );
        // screen.debug();
        expect( screen.getByText('101') ).toBeTruthy();
        
    });

    test('should decrement with the button -1', () => {
        
        render( <CounterApp value={ initialVaue } /> )
        fireEvent.click( screen.getByText("-1") );
        // screen.debug();
        expect( screen.getByText('99') ).toBeTruthy();

    });

    test('test the reset button', () => {
        
        render( <CounterApp value={ initialVaue } /> )
        fireEvent.click( screen.getByText("+1") );
        fireEvent.click( screen.getByText("+1") );
        fireEvent.click( screen.getByText("+1") );
        // fireEvent.click( screen.getByText("Reset") );
        fireEvent.click( screen.getByRole("button", {name: 'btn-reset'}) );
        
        expect( screen.getByText('100') ).toBeTruthy();

    });

});
