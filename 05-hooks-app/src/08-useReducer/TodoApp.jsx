import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    },
]

export const TodoApp = () => {

    // const [state, dispatch] = useReducer(todoReducer, initialState);
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

    const hadleNewTodo = (todo) => {
        const addTodoAction = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(addTodoAction);
    }

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={todos}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd */}
                    <TodoAdd onNewTodo={hadleNewTodo} />
                </div>

            </div>
        </>
    )
}

