import { useRef, useState, useLayoutEffect } from "react"

export const Quote = ({ image, location, name }) => {

    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({width:0, height: 0})

    // useLayouteffect
    useLayoutEffect(() => {
        // console.log(pRef.current.getBoundingClientRect());

        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height})

    }, [name])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display:'flex'}}
            >
                <div className="row">
                    <div className="col">
                        {
                            (image ? (<img src={image} className="img-fluid"></img>) : (<p>Image not available...</p>))
                        }
                    </div>
                    <div className="col align-self-end">
                        {
                            (location ? (<p ref={pRef} className="mb-1">{location.name}</p>) : (<p className="mb-1">Waiting...</p>))
                        }
                        {
                            (name ? (<footer className="blockquote-footer">{name}</footer>) : (<footer className="blockquote-footer">Waiting...</footer>))
                        }
                    </div>
                </div>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
