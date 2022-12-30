import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Test on <LoginPage />', () => {

    const user = {
        id:1, 
        name: 'fernando',
    }
    
    test('should show the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');
    });

    test('should call the setUser when the button clicked', () => {
        // mock function
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        screen.debug();
        expect( setUserMock ).toHaveBeenCalled();
        // {id:123, name:'Juan', email:'juan@gmail.com'}
        expect( setUserMock ).toHaveBeenCalledWith({id:123, name:'Juan', email:'juan@gmail.com'});
    });

});
