import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Test on <MainApp />', () => {
    
    test('should show the HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter> 
        );
        // screen.debug();
        expect( screen.getByText('Home Page') ).toBeTruthy();
    });

    test('should show the LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter> 
        );
        // screen.debug();
        expect( screen.getByText('Login Page') ).toBeTruthy();
    });

});
