import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const Maincontainer = () => {
  //data of movie will come from store ie subscribing store for movie
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];

  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default Maincontainer;
