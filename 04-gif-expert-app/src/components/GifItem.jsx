import PropTypes from 'prop-types';

export const GifItem = ({ id, title, url }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    // id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

// GifItem.defaultProps = {
//     id: 0,
//     title: 'No hay título',
//     url: "No existe url",
// }
