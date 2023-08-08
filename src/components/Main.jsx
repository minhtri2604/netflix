import React, { useEffect, useState } from "react";

import axios from "axios";
import requests from "../Requests";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  const trunCate = (text, maxlength) => {
    if (text <= maxlength) return;
    return text.slice(0, maxlength) + "...";
  };
  return (
    <div className="w-full h-[550px] text-white mb-8 ">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-fit "
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[20%] px-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="py-4">
            <button className="border border-gray-300  text-black bg-gray-300 px-8 py-2 mr-4 ">
              Play
            </button>
            <button className="border border-gray-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Release: {movie?.release_date}
          </p>
          <p className="w-full md:w-[70%] lg:w-[50%] xl:w-[35%]  text-gray-200 ">
            {movie?.overview && trunCate(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
