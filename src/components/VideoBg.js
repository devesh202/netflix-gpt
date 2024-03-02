import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  //custom hook for getting the trailer
  useTrailerVideo(movieId);
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?&autoplay=1&mute=1"}
        title="YouTube video player"
        className="w-full aspect-video mb-40"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      />
    </div>
  );
};

export default VideoBg;
