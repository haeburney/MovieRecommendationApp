import React from 'react'
import Movie from '../component/Movie';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { TMDB_KEY, URL, BASE_LANG, BASE_REGION } from '../config';
import style from './Home.module.css';

function Home() {
    /* const URL = "https://api.themoviedb.org/3/movie/";
    const BASE_LANG = 'ko';
    const BASE_REGION = 'KR'; */

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `${URL}popular?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`
            )
        ).json();
        setMovies(json.results);
        setLoading(false);
        console.log(json.results);
        console.log(`${URL}popular?api_key=${TMDB_KEY}`);
    }

    useEffect(() => {
        getMovies();
    }, []);




    return (
        <div>
            <nav className={`${style.navbar}`}>
                <Link to='/'>
                    Home
                </Link>

                <ul>

                    <li className={`${style.nav}`}>
                        <Link to='/'>
                            액션
                        </Link>
                    </li>

                    <li className={`${style.nav}`}>
                        <Link to='/'>
                            로맨스
                        </Link>
                    </li>

                    <li className={`${style.nav}`}>
                        <Link to='/'>
                            sf
                        </Link>
                    </li>

                    <li className={`${style.nav}`}>
                        <Link to='/'>
                            애니메이션
                        </Link>
                    </li>
                </ul>

            </nav>
            {loading ? <h1>Loading...</h1> :
                <div>{movies.map(movie =>
                    <Movie
                        key={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        overview={movie.overview}
                        genre_ids={movie.genre_ids}
                        rating={movie.vote_average}
                        id={movie.id}
                    />)} </div>
            }
        </div>
    )
}

export default Home;
