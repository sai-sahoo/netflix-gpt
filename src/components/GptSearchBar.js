import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='grid grid-cols-12 w-1/2 bg-black'>
            <input type='text' placeholder='What do you want to watch?' className='p-4 m-4 col-span-9' />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar