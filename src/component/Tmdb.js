import React, { useState, useEffect } from 'react';
import Movie from './Movie';

function Tmdb() {
    const KEY = process.env.REACT_APP_TMDB_KEY;
    const URL = "https://api.themoviedb.org/3/movie/";

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `${URL}popular?api_key=${KEY}`
            )
        ).json;
        setMovies(json.results);
        setLoading(false);
        console.log(json.results);
    }

    useEffect(()=>{
        getMovies();
    },[]);




    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>{movies.map(movie =>
                    <Movie
                        key={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        overview={movie.overview}
                        genre_ids={movie.genre_ids}
                    />)} </div>
            }
        </div>
    )
}

export default Tmdb
