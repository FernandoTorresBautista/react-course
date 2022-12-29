import { useEffect } from "react";
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // }
]

// inicizliza los valores si estan en el local storage
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    //disparar un efecto secundario - useEffect
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])    

    const hadleNewTodo = (todo) => {
        const addTodoAction = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(addTodoAction);
    }
    
    const hadleDelTodo = (todoId) => {
        const delTodoAction = {
            type: '[TODO] Remove Todo',
            payload: todoId,
        }
        dispatchTodo(delTodoAction);
    }

    const onToggleTodo = (todoId) => {
        const toggleTodoAction = {
            type: '[TODO] Toggle Todo',
            payload: todoId,
        }
        dispatchTodo(toggleTodoAction);
    }

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={hadleDelTodo} 
                        onToggleTodo={onToggleTodo} 
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd */}
                    <TodoAdd 
                        onNewTodo={hadleNewTodo} 
                    />
                </div>

            </div>
        </>
    )
}

