import React from "react";
import "./Row.css";
import path from "../../helper/axios.jsx";
import { useState, useEffect } from "react";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const imgURL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await path.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  //   console.log(movies);
  // const [trailerURL, setTrailerURL] = useState("");
  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie) => {
  //   if (trailerURL) {
  //     setTrailerURL("");
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         // https://www.youtube.com/live/XtMThy8QKqU
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerURL(urlParams.get("v="));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div className={isLargeRow ? "row__posterLarge" : "row__poster"}>
            <img
              key={movie.id}
              // onClick={() => handleClick(movie)}
              className={isLargeRow ? "posterLarge" : "poster"}
              src={`${imgURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
            <span className="movie__title">{movie.title}</span>
          </div>
        ))}
      </div>
      {/* {trailerURL && <YouTube videoId={trailerURL} opts={opts} />} */}
    </div>
  );
}

export default Row;
