import { todoReducer } from "./../../src/08-useReducer/todoReducer";

describe('TODO Reducer Tests', () => {

    const initialState = [{
        id:1,
        description: 'Demo TODO',
        done: false,
    }]
    
    test('should return the initialState', () => {
        
        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState );

    });

    test('should add a new TODO', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2, 
                description: 'Nuevo todo "2',
                done: false,
            }
        }
        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('should delete one TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        }
        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe( 0 ); 
    });

    test('should trigger the toggle of todos', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }
        const newState = todoReducer(initialState, action);
        expect( newState[0].done ).toBe( true ); 

        const newState2 = todoReducer(newState, action);
        expect( newState2[0].done ).toBe( false ); 
    });

});
