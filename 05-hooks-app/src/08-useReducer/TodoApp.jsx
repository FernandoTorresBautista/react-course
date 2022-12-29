import { useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    // useTodo
    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDelTodo, handleToggleTodo} = useTodos();

    //disparar un efecto secundario - useEffect
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDelTodo} 
                        onToggleTodo={handleToggleTodo} 
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd */}
                    <TodoAdd 
                        onNewTodo={handleNewTodo} 
                    />
                </div>

            </div>
        </>
    )
}
