import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    const gptQuery = 'Act as a movie recomendation system and suggest some movies for the query' + searchText.current.value + '. Only give me names of 5 movies with comma separated like the example result given ahead. Example Result: Gadar, Koi mil gaya, Golmal, Don, Sholay';
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
  }
  const searchMovieTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query='+movie, API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='grid grid-cols-12 w-1/2 bg-black' onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder={lang[langKey].searchPlaceholderText} className='p-4 m-4 col-span-9' ref={searchText} />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].searchBtnText}</button>
      </form>
    </div>
  )
}

export default GptSearchBar