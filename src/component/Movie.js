import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({poster_path, title, overview,genre_ids, id, rating}) {
  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt ={title} />
      <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
        
        <p>{overview}</p>
        <p>평점 : {rating}</p>
        <ul>{genre_ids.map((g)=> (<li key={g}>{g}</li>))}</ul>
        <p>{id}</p>
    </div>
  )
}

Movie.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Movie;