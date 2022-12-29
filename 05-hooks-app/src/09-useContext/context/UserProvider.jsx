import { UserContext } from "./UserContext"

const user = {
    id: 123, 
    name: 'name lastname',
    email: 'username@example.com',
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{hola: 'Mundo', user: user}}>
            { children }
        </UserContext.Provider>
    )
}
