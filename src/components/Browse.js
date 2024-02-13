import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";

const Browse = () => {
  //fetch data from tmdb api and update store
  // const dispatch = useDispatch()
  // const getNowPlayingMovies = async () => {
  //   const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
  //   const json = await data.json();
  //   console.log(json?.results);
  //   dispatch(addNowPlayingMovies(json.results))
  // };
  // useEffect(() => {
  //   getNowPlayingMovies();
  // },[])
  //calling custom hook
  useNowPlayingMovies();
  return (
    <div>

      <Header />
      {/* maincontainer
      

      - videobg
      - videotitle
      secondarycontiner
       - movielist*n 
       - cards*n */}
       <Maincontainer/>
       


    </div>
  );
};

export default Browse;
