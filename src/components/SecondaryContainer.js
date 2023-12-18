import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className='bg-black'>
        <div className='-mt-48 mx-4 relative z-20'>
          <MovieList title={'Now Playing Movies'} movies={movies?.nowPlayingMovies} />
          <MovieList title={'Popular Movies'} movies={movies?.popularMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer