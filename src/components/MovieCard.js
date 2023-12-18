import React from 'react'
import { TMDB_MOVIE_POSTER } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-52 pr-4'>
            <img src={TMDB_MOVIE_POSTER + posterPath} alt='movie card' />
        </div>
    )
}

export default MovieCard