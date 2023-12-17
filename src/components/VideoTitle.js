import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-4 w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black py-4 px-12 rounded-lg hover:bg-opacity-60'>play</button>
            <button className='bg-gray-500 text-white py-4 px-12 rounded-lg mx-2 hover:bg-opacity-60'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle