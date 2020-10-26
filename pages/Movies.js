import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Movies({movie, config}) {
    return(
        <li>
            <Link to={`/movie/${movie.id}`}>
                {config.images?.base_url && <img src={config.images.base_url + "w342" + movie.poster_path} alt={`${movie.title} poster`} />}
                <h3>{movie.title}</h3>
            </Link>
        </li>
    )
}

Movies.PropTypes={
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
    config: PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        })
    }).isRequired
}