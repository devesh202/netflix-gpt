import React, { useEffect, useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI'

const GptSearchBar = () => {
  
  const langKey= useSelector((store) => store.config.lang)
  const searchText = useRef(null);

  const handleGPTSearchClick = async() => {
    console.log(searchText.current.value);
    const query = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ".only give me names of 5 movies, comma seperated like example result given ahead. Example Result: gadar , sholay, don , golmaal, tarzan"
    // Make api call to gpt api to get movie results 
      const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices);
     
  }
  


  
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar