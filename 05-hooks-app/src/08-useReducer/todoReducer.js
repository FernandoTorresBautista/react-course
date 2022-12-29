

export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            // {action: {type:X, payload:id} }
            return initialState.filter( todo => todo.id !== action.payload);

        default:
            return initialState;
    }

}