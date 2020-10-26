import React, { useState, useEffect } from 'react';
import Movies from './Movies';
import Filter from './Filter';


const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=9cae3479b893d8f338d20b2d81c2b391&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=9cae3479b893d8f338d20b2d81c2b391"

export default function MoviesList() {

    const [filter, setFilter] = useState('');
    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState([]);

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setMovies(data.results);
        }catch(e) {
            (console.error(e));
        }
    }
    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL);
            const config = await res.json();
            setConfig(config);
        }catch(e) {
            (console.error(e));
        }   
    }
    useEffect(() => {
        getMovies();
        getConfig();
    }, [filter])
    return(
        <div>
            <Filter setFilter={setFilter} filter={filter}/>
            <ul className="movies-list">
                {movies.filter((movie) => 
                movie.title.toLowerCase().includes(filter.toLowerCase()))
                    .map((movie) => (<Movies key={movie.title} config={config} movie={movie}/>))}
            </ul>
        </div>
    )
}
