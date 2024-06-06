/* eslint-disable */

import React, { useState, useEffect } from "react";
import "../App.css";
import MovieListHeading from "../component/MovieListHeading";
import SearchBox from "../component/SearchBox";
import MovieList from "../component/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=2c16b570c625a58a14e2fd93ad3c2234`
      );

      const data = await response.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2c16b570c625a58a14e2fd93ad3c2234&query=${searchTerm}`
    );

    const data = await response.json();
    setMovies(data.results);
  };

  console.log(movies);
  return (
    <div className="master-div">
      <MovieListHeading></MovieListHeading>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      ></SearchBox>
      <MovieList movies={movies}></MovieList>
    </div>
  );
}

export default HomePage;
