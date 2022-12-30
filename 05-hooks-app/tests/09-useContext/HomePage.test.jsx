import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Test on <HomePage />', () => {

    const user = {
        id:1, 
        name: 'fernando',
    }
    
    test('should show the components without the user', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');

        // screen.debug();
    });

    test('should show the components with the user', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
    });

});
