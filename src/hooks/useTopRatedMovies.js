import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated',API_OPTIONS)
    const json = await data.json()
    console.log(json.results)
    dispatch(addPopularMovies(json?.results));
  }
  useEffect(()=>{
    getTopRatedMovies();
  },[])
}

export default useTopRatedMovies;