import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'

const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img className='w-screen h-screen object-cover' src="img/netflix-bg.jpg" alt="bgimg" />
            </div>
            <div className=''>
                <GptSearchBar />
                <GptSuggestions />
            </div>
        </>

    )
}

export default GptSearch