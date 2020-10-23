import React, { useState, useEffect } from 'react';
import Movies from './Movies';
import Filter from './Filter';


const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=9cae3479b893d8f338d20b2d81c2b391&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"

export default function MoviesList() {

    const [filter, setFilter] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const res = await fetch(API_URL);
        const data = await res.json().catch (console.error(e));
        setMovies(data.results);
        console.log("data", data);
    }

    useEffect(() => {
        getMovies();
    }, [filter])


    return(
        <div>
            <Filter setFilter={setFilter} filter={filter}/>
            {movies.filter((movie) => 
            movie.title.toLowerCase().includes(filter.toLowerCase()))
                .map((movie) => (<Movies key={movie.title} movie={movie}/>))}
        </div>
    )
}
