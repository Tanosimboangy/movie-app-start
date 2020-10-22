import React from "react";

const movies = [
    {name: '36th chamber'},
    {name: '3rd avanger'},
    {name: '25th flotter'}
]


export default function MoviesLists() {
    return (
        <div>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.name}>{movie.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}