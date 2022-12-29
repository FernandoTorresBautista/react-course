
console.log("intro-useReducer");

//initial state of the application
const initialState = [{
    id: 1, 
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// todoReducer
const todoReducer = (state = initialState, action = {}) => {

    // add todo
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }
    
    return state;
}

// test
let todos = todoReducer();

const newTodo = {
    id: 2, 
    todo: 'Recolectar la piedra del Poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);
