

export const Quote = ({ image, location, name }) => {
    return (
        <blockquote className="blockquote text-end">
            <div className="row">
                <div className="col">
                    {
                        (image ? (<img src={image} className="img-fluid"></img>) : (<p>Image not available...</p>))
                    }
                </div>
                <div className="col align-self-end">
                    {
                        (location ? (<p className="mb-1">{location.name}</p>) : (<p className="mb-1">Waiting...</p>))
                    }
                    {
                        (name ? (<footer className="blockquote-footer">{name}</footer>) : (<footer className="blockquote-footer">Waiting...</footer>))
                    }
                </div>
            </div>
        </blockquote>
    )
}
