import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      SetMovies(res.data.results);
    });
  }, [fetchURL]);
  const sliderLeft = () => {
    const sliderLeft = document.getElementById("slider" + rowID);
    sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500;
  };
  const sliderRight = () => {
    const sliderRight = document.getElementById("slider" + rowID);
    sliderRight.scrollLeft = sliderRight.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
      <div className="group relative flex items-center  ">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white group-hover:block  rounded-full opacity-50 hover:opacity-100 cursor-pointer hidden  z-10 absolute "
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll   whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item,id) => (
            <>
              <Movie key={id} item={item} />
            </>
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white rounded-full group-hover:block z-10 opacity-50 hover:opacity-100 hidden absolute right-0   "
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
