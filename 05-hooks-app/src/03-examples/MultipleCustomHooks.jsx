import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                ( 
                    isLoading==true && data==null 
                        ? <LoadingQuote />
                        : <Quote image={data.image} location={data.location} name={data.name} />
                )
            }

            <button 
                className="btn btn-primary" 
                disabled = {isLoading}
                onClick={() => increment() }>
                Next quote</button>

        </>
    )
}
