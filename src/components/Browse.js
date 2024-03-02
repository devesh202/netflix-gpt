import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  

  //calling custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
 
      <Header />
      {showGptSearch?(
      <GptSearch/>):
      <>
        <Maincontainer/>
        <SecondaryContainer/>
      </>
    }
    
       
       
      


    </div>
  );
};

export default Browse;
