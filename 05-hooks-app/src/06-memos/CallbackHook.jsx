import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // use callback... 
    const incrementar = useCallback(
      (value) => {
        setCounter( (c) => c + value);
      },
      [],
    )
    
    useEffect(() => {
        // incrementar()
    }, [incrementar])
    
    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            {/* <ShowIncrement increment={increment} /> */}
            <ShowIncrement value={5} increment={incrementar} />

        </>
    )
}
