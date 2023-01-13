import React from 'react'
import Movie from '../component/Movie';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { TMDB_KEY, URL, BASE_LANG, BASE_REGION } from '../config';
import style from './Home.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

function Home() {
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
                <Link to='/' className={`${style.logo}`}>
                    HYEFLIX
                </Link>

                <ul className={`${style.menu}`}>
                    <li className={`${style.list}`}>
                        <Link to='/' >액션</Link>
                    </li>

                    <li className={`${style.list}`}>
                        <Link to='/' >로맨스</Link>
                    </li>

                    <li className={`${style.list}`}>
                        <Link to='/' >SF</Link>
                    </li>

                    <li className={`${style.list}`}>
                        <Link to='/' >애니메이션</Link>
                    </li>

                    <li className={`${style.list}`}>
                        <Link to='/' >음악</Link>
                    </li>
                </ul>
            </nav>


            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                navigation={true}
                mousewheel={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className={`${style.mySwiper}`}
            >
                {loading ? <h1>Loading...</h1> :
                    <div>{movies.map(movie =>
                        <SwiperSlide>
                            <Movie
                                key={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                overview={movie.overview}
                                genre_ids={movie.genre_ids}
                                rating={movie.vote_average}
                                id={movie.id}
                            /></SwiperSlide>)} </div>
                }
            </Swiper>

        </div>
    )
}

export default Home;
