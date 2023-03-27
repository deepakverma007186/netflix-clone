import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../helper/axios.jsx";
import requests from "../../helper/request.jsx";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[Math.floor(Math.random() * 19)]);
      return request;
    }
    fetchData();
  }, []);
  //   console.log(movie);
  function trancateDesc(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        {/* {title} */}
        <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
        {/* {two buttons} */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* {description} */}
        <p className="banner__desc">{trancateDesc(movie?.overview, 200)}</p>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
