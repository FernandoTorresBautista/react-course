import {memo} from 'react'

export const Small = memo(({ value }) => {

    console.log("Me vovli a dibujar")

    return (
        <small>{value}</small>
    )
})
