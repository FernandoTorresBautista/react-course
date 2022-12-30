import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test in <TodoItem />', () => {
    
    const todo = {
        id: 1, 
        description: 'Piedra del Alma',
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show the ToDo pending', () => {
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const liElement = screen.getByRole('listitem');
        // console.log(liElement.innerHTML);
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        // expect( spanElement.className ).toBe('align-self-center ');
        expect( spanElement.className ).toContain('align-self-center');

        // screen.debug();
    });

    test('should show the ToDo completed', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

        // screen.debug();
    });

    test('the span should call the ToggleTodo when clicked', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalled(); 
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id ); 
    });

    test('the button should call the DeleteTodo when clicked', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalled(); 
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id ); 
    });

});
