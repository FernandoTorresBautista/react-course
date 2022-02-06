import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

// Functional components
const PrimeraApp = ( { saludo, subtitulo } ) => {
    // no es buena opcion
    // if ( !saludo ) {
    //     throw new Error('El saludo es necesario')
    // }

    return (
        <>
            <h1> { saludo } </h1>
            <p>{ subtitulo }</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
