import React from 'react'
import { TMDB_MOVIE_POSTER } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className='w-44 md:w-52 pr-4'>
            <img src={TMDB_MOVIE_POSTER + posterPath} alt='movie card' />
        </div>
    )
}

export default MovieCard