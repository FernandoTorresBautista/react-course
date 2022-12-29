import { useReducer } from "react";
import { todoReducer } from "./../08-useReducer/todoReducer"

// inicizliza los valores si estan en el local storage
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = (initialState = []) => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (todo) => {
        const addTodoAction = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(addTodoAction);
    }
    
    const handleDelTodo = (todoId) => {
        const delTodoAction = {
            type: '[TODO] Remove Todo',
            payload: todoId,
        }
        dispatchTodo(delTodoAction);
    }

    const handleToggleTodo = (todoId) => {
        const toggleTodoAction = {
            type: '[TODO] Toggle Todo',
            payload: todoId,
        }
        dispatchTodo(toggleTodoAction);
    }

    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo, 
        handleDelTodo,
        handleToggleTodo,
    }
}
