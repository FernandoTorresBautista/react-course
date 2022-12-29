import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useCounter");
jest.mock("../../src/hooks/useFetch");

describe('Test on <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });
    
    test('should show the component by defect', () => {
        useFetch.mockReturnValue({
            data: null, 
            isLoading: true,
            hasError: null,
        });
        render( <MultipleCustomHooks />);
        // screen.debug();

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole('button', {name:'Next quote'});
        // console.log( nextButton.disabled );
        expect( nextButton.disabled ).toBeTruthy();
    });

    test('should show a quote', ()=>{
        useFetch.mockReturnValue({
            data: {
                image: 'fake url', 
                location: {name: 'fake nameLocation'}, 
                name: 'fake name'
            }, 
            isLoading: false,
            hasError: null,
        });
        render( <MultipleCustomHooks />);
        // screen.debug();
        expect( screen.getByText('fake name') );
        expect( screen.getByText('fake nameLocation') );
        const nextButton = screen.getByRole('button', {name:'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('should call the function increment', ()=>{
        useFetch.mockReturnValue({
            data: {
                image: 'fake url', 
                location: {name: 'fake nameLocation'}, 
                name: 'fake name'
            }, 
            isLoading: false,
            hasError: null,
        });
        render( <MultipleCustomHooks />);
        // screen.debug();
        const nextButton = screen.getByRole('button', {name:'Next quote'});
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
    });

});
