/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./DetailPage.css";

function DetailPage() {
  const [searchQuery] = useSearchParams();
  const [detail, setDetail] = useState({});
  const [videos, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);

  const movieId = searchQuery.get("movie");
  const params = useParams();
  console.log(movieId);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2c16b570c625a58a14e2fd93ad3c2234`
    )
      .then((data) => data.json())

      .then((data) => {
        setDetail(data), setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [params.productId]);
  // console.log(detail);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=2c16b570c625a58a14e2fd93ad3c2234`
    )
      .then((data2) => data2.json())
      .then((data2) => {
        setVideo(data2), setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(videos);
  console.log("results", detail);
  return (
    <div>
      {loading ? (
        <>
          <h1 className="detailHeading">{detail.title}</h1>
          <div className="detailDiv">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
              alt={detail.title}
            />
            <div className="DetailDescription">
              <p>Tagline: {detail.tagline}</p>
              <p> {detail.overview}</p>
              <p>
                Genres:{" "}
                {detail.genres && detail.genres.length > 0 ? (
                  detail.genres.map((genre, i) => (
                    <span key={i}>
                      {genre.name}
                      {i !== detail.genres.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>No genres available</span>
                )}
              </p>
              <p>Budget: {detail.budget}</p>
              <p>origin_country: {detail.origin_country}</p>
              <p>Status: {detail.status}</p>
              <p>Ratings: {detail.vote_average}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Please wait</p>
      )}

      {loading ? (
        videos.results?.map((video, i) => {
          return (
            <iframe
              key={i}
              src={`https://www.youtube.com/embed/${video.key}`}
              frameBorder="0"
            ></iframe>
          );
        })
      ) : (
        <p>Please wait</p>
      )}
    </div>
  );
}

export default DetailPage;
