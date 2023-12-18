import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-6 md:px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-4 w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black py-2 md:py-4 px-6 md:px-12 rounded-lg hover:bg-opacity-60'>play</button>
            <button className='hidden md:inline-block bg-gray-500 text-white py-4 px-12 rounded-lg mx-2 hover:bg-opacity-60'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle