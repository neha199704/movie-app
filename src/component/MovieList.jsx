/* eslint-disable */
import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import DetailPage from "../pages/DetailPage";

function MovieList({ movies }) {
  return (
    <div className="movie-list-container">
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <Link to={`/movie/?movie=${movie.id}`}>Details</Link>
            <h2>{movie.title}</h2>
            <h3>Release Date -: {movie.release_date}</h3>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
