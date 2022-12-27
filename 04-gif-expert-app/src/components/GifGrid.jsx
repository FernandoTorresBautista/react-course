import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { PropTypes } from "prop-types";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                // logic and
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map( (img) => (
                            <GifItem 
                                key={img.id}
                                // with {...img} spread img properties
                                {...img}
                            />
                        )) 
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
