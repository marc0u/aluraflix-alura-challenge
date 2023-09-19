import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "@/utils/axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get("fetchNetflixOriginals").then((res) => {
      setMovie(res.data[Math.floor(Math.random() * res.data.length - 1)]);
    });
  }, []);

  const truncateDescription = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More Info</button>
        </div>
        <h1 className="banner_description">{truncateDescription(movie?.overview, 200)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
