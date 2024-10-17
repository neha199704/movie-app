import React, { useState, useEffect } from "react";
import "../App.css";
import SearchBox from "../component/SearchBox";
import MovieList from "../component/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  async function fetchMovies(page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=2c16b570c625a58a14e2fd93ad3c2234&page=${page}`
    );

    const data = await response.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2c16b570c625a58a14e2fd93ad3c2234&query=${searchTerm}&page=${currentPage}`
    );

    const data = await response.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="master-div">
      <h1 className="heading">Movie App</h1>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      ></SearchBox>
      <MovieList movies={movies}></MovieList>
      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pageBtn"
        >
          Previous
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pageBtn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
