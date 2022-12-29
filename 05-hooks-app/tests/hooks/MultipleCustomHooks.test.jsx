import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Test on <MultipleCustomHooks />', () => {
    
    test('should show the component by defect', () => {
        render( <MultipleCustomHooks />);
        // screen.debug();

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole('button', {name:'Next quote'});
        // console.log( nextButton.disabled );
        expect( nextButton.disabled ).toBeTruthy();
    });

});
