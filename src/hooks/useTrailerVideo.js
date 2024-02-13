import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo=(movieId)=>{
   const dispatch = useDispatch()
   
    const getMovieVideos = async() =>{
       const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
       const json = await data.json();
       const filterData=json?.results.filter((video)=>video.type === "Trailer")
    
       const trailer =filterData.length? filterData[0]: json?.results[0];
    //    adding trailer to the store in movieslice so that we can use in iframe
       console.log(trailer)
       dispatch(addTrailerVideo(trailer))
  
    }
    useEffect(() =>{getMovieVideos()},[])
   }
    export default useTrailerVideo