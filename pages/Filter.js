import React from 'react';
import propTypes from 'prop-types';
export default function Filter({setFilter, filter}) {
    return(
        <label>
            Filter:
            <input
            style={{margin:'2rem'}}
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            />
        </label>
    )
}
Filter.propTypes ={
    filter: propTypes.string.isRequired,
    setFilter: propTypes.func.isRequired
}