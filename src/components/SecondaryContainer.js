import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  

  return (
    // to avoid null 
    movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-96 relative z-20'>
        <MovieList title={"Now playing"} movies = {movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies = {movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies = {movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies = {movies.nowPlayingMovies} />
        <MovieList title={"now playing"} movies = {movies.nowPlayingMovies} />
      </div>
    </div>
  ))
}

export default SecondaryContainer