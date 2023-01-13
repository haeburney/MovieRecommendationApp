import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import movie from "./Movie.module.css";


function Movie({poster_path, title, overview, id, rating}) {
  return (
    <div>
      <div className={`${movie.container}`}>
        <img src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={title} />
        <Link to={`/movie/${id}`}><h2>{title}</h2></Link>

        <p>{overview}</p>
        <p>평점 : {rating}</p>

      </div>
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
