import { render, screen } from '@testing-library/react';
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

});
