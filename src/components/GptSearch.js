import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img src="img/netflix-bg.jpg" alt="bgimg" />
            </div>
            <GptSearchBar />
            <GptSuggestions />
        </div>
    )
}

export default GptSearch