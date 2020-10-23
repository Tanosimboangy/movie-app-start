import React from 'react';
import propTypes from 'prop-types';

export default function Movies({movie}) {
    return(
        <li>{movie.title}</li>
    )
}
Movies.propTypes={
    movie: propTypes.shape({
        title:propTypes.string.isRequired
    }).isRequired
}