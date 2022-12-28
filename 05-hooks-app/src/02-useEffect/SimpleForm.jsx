import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'example',
        email: 'username@example.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    // useEffect(() => {
    //     console.log('useEffect called!');
    // }, []); // [] executed one time


    // useEffect(() => {
    //     console.log('formState changed!');
    // }, [formState]); // [] executed one time
    
    // useEffect(() => {
    //     console.log('email changed!');
    // }, [email]); // [] executed one time

    // useEffect(() => {
    //   first
    //   return () => {
    //     second
    //   }
    // }, [third])    

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="username@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'example2') && <Message />
            }

        </>
    )
}
