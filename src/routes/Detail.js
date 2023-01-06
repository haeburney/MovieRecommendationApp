import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { TMDB_KEY, URL, BASE_LANG, BASE_REGION } from '../config';

function Detail() {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    console.log(id);
    const getMovie = async () => {
        const json = await (
            //https://api.themoviedb.org/3/movie/{movie_id}?api_key=c8a3d049a6a74a627e4a2fa5bfd674f6&language=ko
            await fetch(`${URL}${id}?api_key=${TMDB_KEY}&language=${BASE_LANG}`)
        ).json();
        console.log(json);
        setDetail(json);
    };

    useEffect(() => {
        getMovie();
    }, []);



    return (
        <div>
            
        </div>
    )
}

export default Detail;