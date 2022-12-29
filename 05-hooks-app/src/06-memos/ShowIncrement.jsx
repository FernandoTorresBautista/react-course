import { memo } from "react";

export const ShowIncrement = memo(({increment, value = 1}) => {

    console.log("me volvi a generar");

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment( value )
            }} 
        >
            Incrementar
        </button>
    )
})
