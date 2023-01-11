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
        console.log(json.genres);
        console.log(json.genres[0].name);
    };

    useEffect(() => {
        getMovie();
    }, []);



    return (
        <div>
            <img src={"https://image.tmdb.org/t/p/original"+ detail.backdrop_path} alt={detail.title} />
            <img src={"https://image.tmdb.org/t/p/original"+ detail.poster_path} alt={detail.title}/>
            <h1>{detail.title}</h1>
            <h2>{detail.tagline}</h2>
            <p>{detail.release_date}</p>
            <p>{detail.overview}</p>
            <ul>
               {/*  {detail && detail.genres.map(([key,value])=><li key={key}>{key} {value}</li>)} */}
               {detail.genres && detail.genres.map((g)=><li key={g.id}>{g.name}</li>)} 
            </ul>
            <p>예산 : {detail.budget}$</p>
           {/*  {console.log(detail.genres[0].name)} */}
        </div>
    )
}

export default Detail;
