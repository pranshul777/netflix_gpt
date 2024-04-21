import React, { useState } from 'react'
import Header from './Header'
import { API_Options, Language, MULTI_SEARCH_API, NetFlix_BackGround, genAI } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from "@google/generative-ai";
import safetySetting from '../utils/geminiAI';
import MovieList from './MovieList';
import { provideArray } from '../utils/gptSlice';

const GptSearch = () => {
    const dispatch = useDispatch();
    let [searchTxt,setSearchTxt]=useState("");
    const lang=useSelector(store=>store.language.lang);
    const content = useSelector(store=>store.gpt.array);

    const callingContentAPI=async (text)=>{
      // console.log(text);
      try{
        const res=await fetch(MULTI_SEARCH_API+text, API_Options);
        const data=await res.json();
        // console.log(data);
        // <MovieList Title={text} showList={data.results}/>
        return data;
      }
      catch(err){
        console.error('error:' + err);
      }
    }
    const getContent=  (text)=>{
      const array = text.split(", ");
      const promises=Promise.all(array.map(res=>{
        return callingContentAPI(res);
      }))
      promises.then(res=>{
        console.log(res);
        dispatch(provideArray(res));
      })
    }
    async function handleSearch() {
      console.log("started");
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro",safetySetting });
    
      const prompt = "Work as a Movies and TV series recommendation system and recommend only titles(no decoratives, details, numbers ,etc) of 5 movies or TV series on the basis of following query : "+searchTxt+" ,you must provide result in comma seperated value (eg a, b, c, d) and the results must be relevent";
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // console.log(text);
      getContent(text);
    }
  return (
    <>
    <Header/>
    <div className='w-full relative overflow-auto'>
        <img className='sticky top-0 left-0 w-full h-[150vh] brightness-50' src={NetFlix_BackGround}></img>
        <div className='w-full absolute top-20 left-44 z-10 flex '>
            <input className='w-1/3 p-2 rounded-l-sm' value={searchTxt} type='text' placeholder={Language[lang].searchTxt} onChange={(e)=>setSearchTxt(e.target.value)} ></input>
            <div className='w-1/12 rounded-r-sm p-2 bg-red-600 flex justify-center font-semibold text-white cursor-pointer hover:bg-red-500' onClick={()=>{
              handleSearch();
            }}>{Language[lang].searchSymbol}</div>
        </div>
        {content && <div className='overflow-auto absolute top-40 left-0 w-full bg-black space-y-5 bg-opacity-60'>
        {
          content.map((result)=>{
            console.log(result);
            return <MovieList Title={""} showList={result.results}/>
          })
        }
        </div>}
    </div>
    </>
  )
}

export default GptSearch